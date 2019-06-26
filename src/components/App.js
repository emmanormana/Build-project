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
import {doCreateAccount, doSignIn, doSignOut, doWelcomeBack} from "../actions/authActions";
import {dashboard, borrowTool, myRentals,myTools} from './common/data/welcomePageData'
import jwt_decode from "jwt-decode";

class App extends Component {
    async componentDidMount() {
        await this.props.getTools();
        if (localStorage.getItem('tools_user')) {
            console.log('I was called');
            const expiredTime = jwt_decode(localStorage.getItem('tools_user'));
            const currentTime = Date.now() / 1000;
            await expiredTime.exp > currentTime ? this.props.doWelcomeBack(localStorage.getItem('tools_user')) : this.props.doSignOut();
        }
        this.props.isAuth && this.props.history.push('/dashboard')
    }
    handleSignIn = async values => {
        await this.props.doSignIn(values);
        this.props.isAuth && this.props.history.push('/dashboard');
    }
    handleCreateAccount = async values => {
        const {first_name, last_name, email, password} = values;
        await this.props.doCreateAccount({first_name, last_name, email, password});
        this.props.isAuth && this.props.history.push('/dashboard');
    };

    render() {
        return (
            <div className='container'>
                <Navigation/>
                <Route exact path='/' render={props => <SignIn {...props} onSubmit={this.handleSignIn}/>}/>
                <Route path='/create-account'
                       render={props => <CreateAccount {...props} onSubmit={this.handleCreateAccount}/>}/>
                <PrivateRoute exact path='/dashboard' cards={dashboard} component={WelcomePage} />
                <Route path='/dashboard/view-my-tools' component={Tools} />

                <Footer/>
            </div>);
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth});
App = withRouter(App);

export default connect(mapStateToProps, {doSignIn, doCreateAccount, getTools, doSignOut, doWelcomeBack})(App);
