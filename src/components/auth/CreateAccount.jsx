import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {doCreateAccount} from "../../actions/authActions";
import HeroImage from '../common/HeroImage';
import userImage from '../../imgs/Oval Copy 3.png';
import TextInput from "../common/form/TextInput";

const required = value => (value ? undefined : 'Required');
const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined;
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value) ? 'Invalid Email Address' : undefined;
const maxLength20 = maxLength(20);
const minLength2 = minLength(2);
const minLength5 = minLength(5);

class CreateAccount extends Component {

    render() {
        const {handleSubmit, pristine, submitting} = this.props;
        return (
            <>
                <HeroImage/>
                <form onSubmit={handleSubmit}>
                    <h4>Create New Account</h4>
                    <Field name='first_name' type='text' component={TextInput} label='First Name'
                           validate={[required, minLength2, maxLength20]}/>
                    <Field name='last_name' type='text' component={TextInput} label='Last Name'
                           validate={[required, minLength2, maxLength20]}/>
                    <Field name='email' type='email' component={TextInput} label='Email Address'
                           validate={[required, email]}/>
                    <Field name='password' type='password' component={TextInput} label='Password'
                           validate={[required, minLength5, maxLength20]}/>
                    <Field name='password2' type='password' component={TextInput} label='Confirm Password'
                           validate={[required]}/>
                    <button type='submit' disabled={submitting || pristine}>Create Account</button>
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

const mapStateToProps = state => ({isAuth: state.auth.isAuth});

CreateAccount = connect(mapStateToProps, {doCreateAccount})(CreateAccount);
export default reduxForm({form: 'createAccount'})(CreateAccount);