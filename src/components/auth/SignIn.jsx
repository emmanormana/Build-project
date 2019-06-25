import React, {Component} from 'react';
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

const required = value => (value ? undefined : 'Required');

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

export default reduxForm({form: 'signIn'})(SignIn);
