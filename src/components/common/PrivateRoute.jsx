import React from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';

const PrivateRoute = ( {component: Component, ...rest} ) => {
  const auth = true;
  if (auth) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to='/sign-in' />;
  }
};

export default PrivateRoute;