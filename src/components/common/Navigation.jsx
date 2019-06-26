import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {NavBar} from "./navStyle";

import {doSignOut} from "../../actions/authActions";

class Navigation extends Component {

    signedInLinks = (
        <div>
            <NavLink to='#'>Support</NavLink>
            <NavLink to='/dashboard/view-my-tools'>My Account Info</NavLink>
            <NavLink to='/' onClick={this.props.doSignOut}>Sign Out</NavLink>
        </div>
    );
    signedOutLinks = (
        <div>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/create-account'>Create Account</NavLink>
            <NavLink to='/'>Sign In</NavLink>
        </div>
    );

    async componentDidMount() {

    }

    render() {
        const {isAuth} = this.props;
        return (
            <NavBar>
                <h1>Use My Tools</h1>
                {isAuth ? this.signedInLinks : this.signedOutLinks}
            </NavBar>
        );
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, {doSignOut})(Navigation);