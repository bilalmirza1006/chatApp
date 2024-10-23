// src/components/AuthPage.js
import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const onClick = ()=>{
    setIsSignUp(!isSignUp);  // toggle the state of isSignUp between true and false.  When true, it shows Sign Up form, and when false, it shows Sign In form.  This is used to switch between Sign In and Sign Up forms.  It's a simple way to create a basic authentication system.  In a real-world application, you would probably use a library like react-router-dom or a backend API to handle the sign in and sign up logic.  But for this simple example, it's good enough.  The isSignUp state is managed in the AuthPage component, and it's passed down to the SignInForm and SignUpForm components as props.  The SignInForm and SignUpForm components use the useState hook to update their own state, and they pass down the updated state to the AuthPage component.  This way, the AuthPage component can control the state of the SignInForm and SignUpForm components.
  }

  return (
    <div className=' min-h-screen flex flex-col justify-center'>
      {/* <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1> */}
      {isSignUp ? <SignUpForm onClick={onClick} isSignUp={isSignUp} /> : <SignInForm onClick={onClick}isSignUp={isSignUp} />}
      {/* <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
      </button> */}
    </div>
  );
};

export default AuthPage;
