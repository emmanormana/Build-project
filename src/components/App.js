import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import {deleteTool, getTools, postTools, putTool} from '../actions/toolActions';


import Tools from './tools/Tools';

import Navigation from './common/Navigation';
import Footer from './common/Footer';
import {GlobalStyle} from './styles/Global';
import SignIn from './auth/SignIn';
import CreateAccount from "./auth/CreateAccount";
import PrivateRoute from "./common/PrivateRoute";
import WelcomePage from "./tools/WelcomePage";
import AddTool from './tools/AddTool';
import EditTool from './tools/EditTool'
import SuccessScreen from './tools/SuccessScreen';
import ComingSoon from './tools/ComingSoon';
import Page404 from './common/Page404'
import {doCreateAccount, doSignIn, doSignOut, doWelcomeBack} from "../actions/authActions";
import {borrowTool, dashboard, myRentals, myTools} from './common/data/welcomePageData'
import jwt_decode from "jwt-decode";
import Loader from "react-loader-spinner";

class App extends Component {
    async componentDidMount() {
        await this.props.getTools();
        if (localStorage.getItem('tools_user')) {
            const expiredTime = jwt_decode(localStorage.getItem('tools_user'));
            const currentTime = Date.now() / 1000;
            await expiredTime.exp > currentTime ? this.props.doWelcomeBack(localStorage.getItem('tools_user')) : this.props.doSignOut();
        }
        this.props.isAuth && this.props.history.push('/dashboard')
    }

    handleSignIn = async values => {
        await this.props.doSignIn(values);
        this.props.isAuth && this.props.history.push('/dashboard');
    };
    handleCreateAccount = async values => {
        const {first_name, last_name, email, password} = values;

        await this.props.doCreateAccount({first_name, last_name, email, password});
        this.props.isSuccess && this.props.history.push('/')
    };

    handleAddTool = async values => {
        values.rental = values.rental !== undefined;
        values.my_network = values.my_network !== undefined;
        values.my_garage_only = values.my_garage_only !== undefined;
        const owner_id = this.props.owner_id;
        const newTool = {...values, owner_id};
        await this.props.postTools(newTool);
        this.props.history.push('/dashboard/status');
    };

    handleUpdateTool = async values => {
        await this.props.putTool(values);
        this.props.history.push('/dashboard/status');
    };

    render() {
        const {isAuthLoading, isToolsLoading} = this.props;
        if (isAuthLoading || isToolsLoading) {
            return <Loader type='Ball-Triangle' color='Black' height='100' width='100'
                           style={{width: '100vw', height: '100vh', margin: 'auto'}}/>
        } else {
            return (<div className='container'>
                <GlobalStyle/>
                <Navigation/>
                <Switch>

                    <Route path='/create-account'
                           render={props => <CreateAccount {...props}
                                                           onSubmit={this.handleCreateAccount}/>}
                    />
                    <PrivateRoute path='/dashboard/coming-soon' component={ComingSoon}/>
                    <PrivateRoute path='/dashboard/status' component={SuccessScreen}/>
                    <PrivateRoute path='/dashboard/view-my-tools' all={false} component={Tools}/>
                    <PrivateRoute path='/dashboard/view-all-tools' all={true} component={Tools}/>
                    <PrivateRoute path='/dashboard/add-tool' onSubmit={this.handleAddTool} component={AddTool}/>
                    <PrivateRoute path='/dashboard/edit-tool/:id' handleSubmit={this.handleUpdateTool}
                                  component={EditTool}/>
                    <PrivateRoute path='/dashboard/borrow-tool' cards={borrowTool} component={WelcomePage}/>
                    <PrivateRoute path='/dashboard/my-tools' cards={myTools} component={WelcomePage}/>
                    <PrivateRoute path='/dashboard/my-rentals' cards={myRentals} component={WelcomePage}/>
                    <PrivateRoute path='/dashboard' cards={dashboard} component={WelcomePage}/>
                    <Route path='/' render={props => <SignIn {...props} onSubmit={this.handleSignIn}/>}/>
                    <Route component={Page404}/>
                </Switch>
                <Footer/>
            </div>);
        }
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    isAuthLoading: state.auth.isLoading,
    isToolsLoading: state.toolList.isLoading,
    owner_id: state.auth.user.id,
    isSuccess: state.auth.isSuccess
});
App = withRouter(App);
const actions = {doSignIn, doCreateAccount, getTools, doSignOut, doWelcomeBack, postTools, putTool, deleteTool};
export default connect(mapStateToProps, actions)(App);
