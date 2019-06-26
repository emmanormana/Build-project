import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTools} from '../actions/toolActions';



import Tools from './tools/Tools';

import Navigation from './common/Navigation';
import Footer from './common/Footer';
import {Route, withRouter} from 'react-router-dom';
import SignIn from './auth/SignIn';
import CreateAccount from "./auth/CreateAccount";
import PrivateRoute from "./common/PrivateRoute";
import WelcomePage from "./tools/WelcomePage";
import {doCreateAccount, doSignIn} from "../actions/authActions";

class App extends Component {
    componentDidMount() {
        this.props.getTools();
    }
    handleSignIn = values => {
        this.props.doSignIn(values);
        this.props.isAuth && this.props.history.push('/dashboard');
    }
    handleCreateAccount = values => {
        const {first_name, last_name, email, password} = values;
        this.props.doCreateAccount({first_name, last_name, email, password});
        this.props.isAuth && this.props.history.push('/dashboard');
    };

    render() {
        return (
            <div className='container'>
                <Navigation/>
                <Route exact path='/' render={props => <SignIn {...props} onSubmit={this.handleSignIn}/>}/>
                <Route path='/create-account'
                       render={props => <CreateAccount {...props} onSubmit={this.handleCreateAccount}/>}/>
                <Route exact path='/dashboard' component={WelcomePage} />
                <Route path='/dashboard/view-my-tools' component={Tools} />

                <Footer/>
            </div>);
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth});
App = withRouter(App);

export default connect(mapStateToProps, {doSignIn, doCreateAccount, getTools})(App);
