import React, {Component} from 'react';
import Navigation from './common/Navigation';
import Footer from './common/Footer';
import {Route} from 'react-router-dom';
import SignIn from './auth/SignIn';
import CreateAccount from "./auth/CreateAccount";
import PrivateRoute from "./common/PrivateRoute";
import WelcomePage from "./tools/WelcomePage";

class App extends Component {
    handleSignIn = values => console.log(values);
    handleCreateAccount = values => {
        console.log(values);
    };

    render() {
        return (
            <div className='container'>
                <Navigation/>
                <Route exact path='/' component={SignIn}/>
                <Route path='/create-account'
                       render={props => <CreateAccount {...props} onSubmit={this.handleCreateAccount}/>}/>
                <PrivateRoute path='/dashboard' component={WelcomePage}/>
                <Footer/>
            </div>);
    }
}

export default App;
