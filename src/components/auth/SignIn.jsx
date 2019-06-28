import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import HeroImage from '../common/HeroImage';

import {
    BottomContent,
    CreateAccountButton,
    CreateAccountContainer,
    ForgotPasswordLink,
    Form,
    FormTop,
    H4,
    InputGroup,
    InputPair,
    NewTo,
    SignInPair,
    SubmitButton,
    Wrapper,
} from '../styles/signInFormStyle';
import TextInput from "../common/form/TextInput";




const required = value => (value ? undefined : '*Required');

class SignIn extends Component {
    render() {

        const {handleSubmit, pristine, submitting} = this.props;

        return (
            <Wrapper>
                <HeroImage/>
                <BottomContent>
                    <Form onSubmit={handleSubmit}>
                        <FormTop>
                            <H4>Sign In</H4>
                        </FormTop>
                        {this.props.isSuccess && <H4>User was created successfully</H4>}
                        <InputGroup>
                            <InputPair>
                                <Field 
                                    type='email' 
                                    name='email' 
                                    placeholder='Email Address' 
                                    label='Email Address'
                                    component={TextInput} 
                                    validate={[required]}
                                />
                            </InputPair>

                            <InputPair>
                                <Field
                                    type='password' 
                                    name='password' 
                                    placeholder='Password' 
                                    label='Password'
                                    component={TextInput} 
                                    validate={[required]}
                                />
                            </InputPair>

                            <SignInPair>
                                <Link to='/forgot-password'>
                                    <ForgotPasswordLink>ForgotPassword?</ForgotPasswordLink>
                                </Link>
                                <SubmitButton type='submit' disabled={pristine || submitting}> 
                                    Sign In 
                                </SubmitButton>
                            </SignInPair>
                            {this.props.errors && <H4>Invalid Credentials</H4>}

                        </InputGroup>
                    </Form>

                    <CreateAccountContainer>
                        <NewTo>New to Use My Tools?</NewTo>
                        <Link to='/create-account'><CreateAccountButton>Create Account</CreateAccountButton></Link>
                    </CreateAccountContainer>
                    
                </BottomContent>
            </Wrapper>
        );
    };
}

const mapStateToProps = state => ({isSuccess: state.auth.isSuccess, errors: state.auth.errors});
SignIn = connect(mapStateToProps)(SignIn);
export default reduxForm({form: 'signIn'})(SignIn);
