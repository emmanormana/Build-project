import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../common/HeroImage';


import { 
  Wrapper, 
  Form,
  H4,
  BottomContent,
  SubmitButton,
  CreateAccountButton,
  Label,
  Input,
  InputGroup,
  InputPair,
  SignInPair,
  ForgotPasswordLink,
  FormTop,
  CreateAccountContainer,
  NewTo,
} from '../styles/signInFormStyle';






const SignIn = () => {
  const initialState = {
    email   : '',
    password: ''
  };

  const reducer           = ( state, newState ) => ({...state, ...newState});
  const [state, setState] = useReducer( reducer, initialState );

  const {email, password} = state;
  const handleSubmit      = e => {
    e.preventDefault();
  };



  return (
    <Wrapper>
      <HeroImage />
      <BottomContent>

        
        <Form onSubmit={handleSubmit}>
          
          <FormTop>
            <H4>Sign In</H4>
          </FormTop>

          <InputGroup>

            <InputPair>
              <Label>Email Address</Label>
              <Input type='email' value={email} className='email'
                onChange={e => setState( {email: e.target.value} )} />
            </InputPair>

            <InputPair>
              <Label>Password</Label>
              <Input type='password' value={password} className='password'
                onChange={e => setState( {password: e.target.value} )} />
            </InputPair>


            <SignInPair>
              <Link  to='/forgot-password'><ForgotPasswordLink>Forgot Password?</ForgotPasswordLink></Link>
              <SubmitButton type='submit'> Sign In </SubmitButton>
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

export default SignIn;
