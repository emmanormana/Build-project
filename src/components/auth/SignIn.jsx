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
      <form>
        <h4>Sign In</h4>
        <div className='input-group'>
          <label>Email Address</label>
          <input type='email' value={email}
                 onChange={e => setState( {email: e.target.value} )} />
          <label>Password</label>
          <input type='password' value={password}
                 onChange={e => setState( {password: e.target.value} )} />
          <Link to='/forgot-password'>Forgot Password?</Link>
          <button type='submit'>Sign In</button>
        </div>
      </form>
    </section>
  );
};

export default SignIn;