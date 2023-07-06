import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Error from './Error';
import ForgotPassword from '../Login/ForgotPassword/ForgotPassword';
import Auto_two_step from '../Login/AutoTwoStepVerification/Auto_two_step';
import ManagerDashboard from '../ManagerComponent/ManagerDashboard/ManagerDashboard';
import ManagerLeave from '../ManagerComponent/ManagerLeave';
import ManagerAttendance from '../ManagerComponent/ManagerAttendance'
import ManagerExpense from '../ManagerComponent/ManagerExpense';
import ManagerAlert from '../ManagerComponent/ManagerAlert/ManagerAlert';
import ManagerHeader from './Headers/ManagerHeader';
import HRDashboard from '../HRComponent/MainHrComponent/Dashboard/HRDashboard/HRDashboard';
import HRAttendance from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRAttendance';
import HREmployeeStatus from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/Onboarding/HREmployeeStatus';
import HRSepration from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRSepration';
import HRExpenses from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRExpenses';
import HRLeaves from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRLeaves';
import HRAlerts from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRAlerts';
import Profiledetails from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/Onboarding/ProfileDetails';
import Header from './Headers/Header';

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
  else if (path === '/header'){
    return <Header/>
  }
  else {
    return <Error/>;
  }
};

export default MainContent;
