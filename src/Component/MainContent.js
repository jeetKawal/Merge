import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import Error from './Error';
import ForgotPassword from '../Login/ForgotPassword';
import Auto_two_step from '../Login/Auto_two_step';

const MainContent = () => {
  const path = window.location.pathname;

  if (path === '/') {
    return <Login />;
  } else if (path === '/login') {
    return <Login />;
  } else if (path === '/signup') {
    return <SignUp />;
  }else if (path === '/forgotpassword') {
    return <ForgotPassword />;
  } 
  else if (path === '/auto_two_step') {
    return <Auto_two_step />;
  }
  else if (path === '/auto_two_step#') {
    return <Auto_two_step/>;
  }
  else {
    return <Error/>;
  }
};

export default MainContent;
