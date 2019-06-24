import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './navigation.scss';

class Navigation extends Component {


    componentDidMount() {
        if (localStorage.getItem('tools_user')) {
            // check to see the token is valid
        }

    }

    signedInLinks = (
        <div>
            <NavLink to='#'>Support</NavLink>
            <NavLink to='/dashboard/account'>My Account Info</NavLink>
            <NavLink to='/dashboard/signout'>Sign Out</NavLink>
        </div>
    );

    signedOutLinks =  (
        <div>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/create-account'>Create Account</NavLink>
            <NavLink to='/'>Sign In</NavLink>
        </div>
    )

    render() {
        return (
            <nav className='navbar'>
                <h1>Use My Tools</h1>
                {this.props.isAuth ? this.signedInLinks : this.signedOutLinks}
            </nav>
        );
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps,null)(Navigation);