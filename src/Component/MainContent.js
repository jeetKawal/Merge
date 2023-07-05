import React from 'react';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import Error from './Error';
import ForgotPassword from '../Login/ForgotPassword';
import Auto_two_step from '../Login/Auto_two_step';
import ManagerDashboard from '../ManagerComponent/ManagerDashboard';
import ManagerLeave from '../ManagerComponent/ManagerLeave';
import ManagerAttendance from '../ManagerComponent/ManagerAttendance'
import ManagerExpense from '../ManagerComponent/ManagerExpense';
import ManagerAlert from '../ManagerComponent/ManagerAlert';
import ManagerHeader from './Headers/ManagerHeader';

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
  else if (path === '/managerdashboard') {
    return <ManagerDashboard/>;
  }
  else if (path === '/managerleave') {
    return <ManagerLeave/>;
  }
  else if (path === '/managerattendance') {
    return <ManagerAttendance/>;
  }
  else if (path === '/managerexpense') {
    return <ManagerExpense/>;
  }
  else if (path === '/manageralert') {
    return <ManagerAlert/>;
  }
  else {
    return <Error/>;
  }
};

export default MainContent;
