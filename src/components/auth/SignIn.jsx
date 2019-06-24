import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

import HeroImage from '../common/HeroImage';

import './signin.scss';

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
    <section className='sign-in'>
      <HeroImage />
      <div className='bottom-content' />
      <form onSubmit={handleSubmit}>
        <h4>Sign In</h4>
        <div className='input-group'>
          <div className='form-group'>
          <label>Email Address</label>
          <input type='email' value={email} className='email'
                 onChange={e => setState( {email: e.target.value} )} />
          </div>
          <div className='form-group'>
          <label>Password</label>
          <input type='password' value={password} className='password'
                 onChange={e => setState( {password: e.target.value} )} />
          </div>
          <div className='form-group'>
          <Link to='/forgot-password'>Forgot Password?</Link>
          <button type='submit'>Sign In</button>
          </div>
        </div>
      </form>
      <div className='create-account'>
        <p>New to Use My Tools?</p>
        <Link to='/create-account'>Create Account</Link>
      </div>

    </section>
  );
};

export default SignIn;