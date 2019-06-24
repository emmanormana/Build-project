import React from 'react';
import Navigation from './common/Navigation';
import Footer from './common/Footer';
import {Route} from 'react-router-dom';
import SignIn from './auth/SignIn';
import CreateAccount from "./auth/CreateAccount";

const App = () => {
    return (
        <div className='container'>
            <Navigation/>
            <Route exact path='/' component={SignIn}/>
            <Route path='/create-account' component={CreateAccount}/>
            <Footer/>
        </div>);
};

export default App;
