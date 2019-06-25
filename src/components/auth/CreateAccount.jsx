import React, {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {doCreateAccount} from "../../actions/authActions";
import HeroImage from '../common/HeroImage';
import userImage from '../../imgs/Oval Copy 3.png';
import TextInput from "../common/form/TextInput";

class CreateAccount extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
    };
    onHandleChange = e => this.setState({...this.state, [e.target.name]: e.target.value});

    onHandleSubmit = async (e)=> {
        console.log(e );
        e.preventDefault();
        // TODO: Need Validation of password before calling out to DB
        // await this.props.doCreateAccount({first_name, last_name, email, password});
        // this.props.isAuth && this.props.history.push('/dashboard');
    };

    render() {
        const { handleSubmit, pristine, submitting} = this.props;
        return (
            <>
                <HeroImage/>
                <form onSubmit={e=>handleSubmit(this.onHandleSubmit(e))}>
                    <h4>Create New Account</h4>
                    <Field name='first_name' type='text' component={TextInput} label="First Name" />
                    <Field name='last_name' type='text' component={TextInput} label="Last Name" />
                    <Field name='email' type='email' component={TextInput} label="Email Address" />
                    <Field name='password' type='password' component={TextInput} label="Password" />
                    <Field name='password2' type='password' component={TextInput} label="Confirm Password" />
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

CreateAccount = connect(mapStateToProps,{doCreateAccount})(CreateAccount);
export default reduxForm({form: 'createAccount'})(CreateAccount);