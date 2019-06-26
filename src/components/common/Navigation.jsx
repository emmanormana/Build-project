import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {doSignOut} from "../../actions/authActions";

import './navigation.scss';

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

    componentDidMount() {
        if (localStorage.getItem('tools_user')) {
            // check to see the token is valid
        }

    }

    render() {
        const {isAuth} = this.props;
        return (
            <nav className='navbar'>
                <h1>Use My Tools</h1>
                {isAuth ? this.signedInLinks : this.signedOutLinks}
            </nav>
        );
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, {doSignOut})(Navigation);