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
import ManagerCalender from '../ManagerComponent/ManagerCalender/ManagerCalender';
import ManagerDirectory from '../ManagerComponent/ManagerDirectory/ManagerDirectory';
import ManagerSeparation from '../ManagerComponent/ManagerSeparation/ManagerSeparation';
import HRCalendar from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRCalender';
import HRDirectory from '../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRDirectory';
import AlertAttendance from '../ManagerComponent/ManagerAlert/Card/AlertAttendance';
import AlertExpense from '../ManagerComponent/ManagerAlert/Card/AlertExpense';
import AlertSeparation from '../ManagerComponent/ManagerAlert/Card/AlertSeparation';
import PrivacyPolicy from './Policy/PrivacyPolicy';
import Faq from './Policy/Faq';

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
  else if (path === '/managercalender') {
    return <ManagerCalender/>;
  }
  else if (path === '/managerdirectory') {
    return <ManagerDirectory/>;
  }
  else if (path === '/managerseparation') {
    return <ManagerSeparation/>;
  }
  else if (path === '/manageralert/alertattendance') {
    return <AlertAttendance/>;
  }
  else if (path === '/manageralert/alertexpense') {
    return <AlertExpense/>;
  }
  else if (path === '/manageralert/alertseparation') {
    return <AlertSeparation/>;
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
  else if (path === '/hr_calender'){
    return <HRCalendar/>
  }
  else if (path === '/hr_directory'){
    return <HRDirectory/>
  }
  else if (path === '/privacy_policy'){
    return <PrivacyPolicy/>
  }
  else if (path === '/faq'){
    return <Faq/>
  }
  else {
    return <Error/>;
  }
};

export default MainContent;
