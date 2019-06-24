import React, {Component} from 'react';
import HeroImage from '../common/HeroImage';
import userImage from '../../imgs/Oval Copy 3.png';

class CreateAccount extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: ''
    };
    onHandleChange = e => this.setState({...this.state, [e.target.name]: e.target.value});

    onHandleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <>
                <HeroImage/>
                <form onSubmit={this.onHandleSubmit}>
                    <h4>Create New Account</h4>
                    <label>First Name</label>
                    <input name='firstname' value={this.state.firstname} placeholder='First Name'
                           onChange={this.onHandleChange}/>
                    <label>Last Name</label>
                    <input name='lastname' value={this.state.lastname} placeholder='Last Name'
                           onChange={this.onHandleChange}/>
                    <label>Email Address</label>
                    <input name='email' value={this.state.email} placeholder='Email Address'
                           onChange={this.onHandleChange}/>
                    <label>Password</label>
                    <input name='password' value={this.state.password} placeholder='Password'
                           onChange={this.onHandleChange}/>
                    <label>Confirm Password</label>
                    <input name='password2' value={this.state.password2} placeholder='Confirm Password'
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

export default CreateAccount