import React from 'react';
import Navigation from './common/Navigation';
import Footer from './common/Footer';
import {Route} from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import SignIn from './auth/SignIn';
const App = () => {
  return (
    <div className="container">
      <Navigation/>
      <Route exact path='/sign-in' component={SignIn} />
      <Footer />
    </div>);
};

export default App;
