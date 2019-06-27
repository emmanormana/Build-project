import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuth, ...rest}) => {
    if (isAuth) {
        return <Route {...rest} render={() => <Component {...rest}/>}/>;
    } else {
        return <Redirect to='/'/>;
    }
};

const mapStateToProps = state => ({isAuth: state.auth.isAuth});
export default connect(mapStateToProps, {})(PrivateRoute);
