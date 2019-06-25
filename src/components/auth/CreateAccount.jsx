import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doCreateAccount} from "../../actions/authActions";
import HeroImage from '../common/HeroImage';
import userImage from '../../imgs/Oval Copy 3.png';

class CreateAccount extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
    };
    onHandleChange = e => this.setState({...this.state, [e.target.name]: e.target.value});

     onHandleSubmit = async e => {
        console.log(this.props);
        const {first_name,last_name,email,password} = this.state;
        e.preventDefault();
        // TODO: Need Validation of password before calling out to DB
        await this.props.doCreateAccount({first_name,last_name,email,password});
    };

    render() {
        return (
            <>
                <HeroImage/>
                <form onSubmit={this.onHandleSubmit}>
                    <h4>Create New Account</h4>
                    <label>First Name</label>
                    <input name='first_name' value={this.state.first_name} placeholder='First Name'
                           onChange={this.onHandleChange}/>
                    <label>Last Name</label>
                    <input name='last_name' value={this.state.last_name} placeholder='Last Name'
                           onChange={this.onHandleChange}/>
                    <label>Email Address</label>
                    <input name='email' type='email' value={this.state.email} placeholder='Email Address'
                           onChange={this.onHandleChange}/>
                    <label>Password</label>
                    <input name='password' type='password' value={this.state.password} placeholder='Password'
                           onChange={this.onHandleChange}/>
                    <label>Confirm Password</label>
                    <input name='password2' type='password' value={this.state.password2} placeholder='Confirm Password'
                           onChange={this.onHandleChange}/>
                    <button type='submit'>Create Account</button>
                </form>
                <img src={userImage} alt='Happy User'/>
                <p>I was tired of always loaning tools and not remembering who I lent them to. With Use My Tools I know
                    where all of my tools are all the time, and I'm even making money by renting out the tools I
                    have</p>
                <p>-Darren Adams</p>
            </>
        )


    }
}

export default connect(null,{doCreateAccount})(CreateAccount);