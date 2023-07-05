import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import Error from './Error';
import ForgotPassword from '../Login/ForgotPassword';
import Auto_two_step from '../Login/Auto_two_step';
import HRDashboard from '../HRComponent/MainHrComponent/Dashboard/HRDashboard';
import HRAttendance from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRAttendance';
import HREmployeeStatus from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/Onboarding/HREmployeeStatus';
import HRSepration from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRSepration';
import HRExpenses from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRExpenses';
import HRLeaves from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRLeaves';
import HRAlerts from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRAlerts';
import Profiledetails from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/Onboarding/ProfileDetails';

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
  else if (path === '/hr_dashboard'){
    return <HRDashboard/>
  }
  else if (path === '/hr_emp_status'){
    return <HREmployeeStatus/>
  }
  else if (path === '/hr_sep_dash'){
    return <HRSepration/>
  }
  else if (path === '/hr_attendance'){
    return <HRAttendance/>
  }
  else if (path === '/hr_expense'){
    return <HRExpenses/>
  }
  else if (path === '/hr_leaves'){
    return <HRLeaves/>
  }
  else if (path === '/hr_alerts'){
    return <HRAlerts/>
  }
  else if (path === '/profile_detailed'){
    return <Profiledetails/>
  }
  else {
    return <Error/>;
  }
};

export default MainContent;
