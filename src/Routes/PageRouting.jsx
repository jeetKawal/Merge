import React from "react";

import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgotPassword/ForgotPassword";

import Auto_two_step from "../Login/AutoTwoStepVerification/Auto_two_step";
import{Routes,Route}from "react-router-dom";
import MainContent from "../Component/MainContent";
import ManagerDashboard from "../ManagerComponent/ManagerDashboard/ManagerDashboard";
import ManagerLeave from "../ManagerComponent/ManagerLeave";
import ManagerAttendance from "../ManagerComponent/ManagerAttendance";
import ManagerExpense from "../ManagerComponent/ManagerExpense";
import ManagerAlert from "../ManagerComponent/ManagerAlert/ManagerAlert";

import HRDashboard from "../HRComponent/MainHrComponent/Dashboard/HRDashboard/HRDashboard";
import HRAttendance from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRAttendance";
import HREmployeeStatus from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/Onboarding/HREmployeeStatus";
import HRSepration from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRSepration";
import HRExpenses from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRExpenses";
import HRLeaves from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRLeaves";
import HRAlerts from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRAlerts";
import Profiledetails from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/Onboarding/ProfileDetails";
import Header from "../Component/Headers/Header";
import ManagerCalender from "../ManagerComponent/ManagerCalender/ManagerCalender";
import ManagerDirectory from "../ManagerComponent/ManagerDirectory/ManagerDirectory";
import ManagerSeparation from "../ManagerComponent/ManagerSeparation/ManagerSeparation";
import HRCalendar from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRCalender";
import HRDirectory from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRDirectory";
import AlertAttendance from "../ManagerComponent/ManagerAlert/Card/AlertAttendance";
import AlertExpense from "../ManagerComponent/ManagerAlert/Card/AlertExpense";
import AlertSeparation from "../ManagerComponent/ManagerAlert/Card/AlertSeparation";
import PrivacyPolicy from "../Component/Policy/PrivacyPolicy";
import Faq from "../Component/Policy/Faq";

const PageRotuing =()=>{
    const design =(
        <>
     

<MainContent/>
<Routes>
    
</Routes>
<Routes>
<Route exact path="/login" component={Login} />
      <Route path="/signup" component={SignUp} /> 
      <Route path="/forgotpassword" component={ForgotPassword}/>
      <Route path="/auto_two_step" component={Auto_two_step}/>
      <Route path="/auto_two_step#" component={Auto_two_step}/>
      <Route path="/header" component={Header}/>

      {/* Manager Routes*/}
      <Route path="/managerdashboard" component={ManagerDashboard}/>
      <Route path="/managerleave" component={ManagerLeave}/>
      <Route path="/managerattendance" component={ManagerAttendance}/>
      <Route path="/managerexpense" component={ManagerExpense}/>
      <Route path="/manageralert" component={ManagerAlert}/>
      <Route path="/managercalender" component={ManagerCalender}/>
      <Route path="/managerdirectory" component={ManagerDirectory}/>
      <Route path="/managerseparation" component={ManagerSeparation}/>
      <Route path="/manageralert/alertattendance" component={AlertAttendance}/>
      <Route path="/manageralert/alertexpense" component={AlertExpense}/>
      <Route path="/manageralert/alertseparation" component={AlertSeparation}/>




      {/* Side bar  */}
      <Route path="/privacy_policy" component={PrivacyPolicy}/>
      <Route path="/faq" component={Faq}/>
      
      
     



      {/* HR Routes */}
      <Route path="/hr_dashboard" component={HRDashboard}/>
      <Route path="/hr_emp_status" component={HREmployeeStatus}/>
      <Route path="/hr_sep_dash" component={HRSepration}/>
      <Route path="/hr_attendance" component={HRAttendance}/>
      <Route path="/hr_expense" component={HRExpenses}/>
      <Route path="/hr_leaves" component={HRLeaves}/>
      <Route path="/hr_alerts" component={HRAlerts}/>
      <Route path="/hr_calender" component={HRCalendar}/>
      <Route path="/hr_directory" component={HRDirectory}/>
      <Route path="/profile_detailed" component={Profiledetails}/>

      


      </Routes>
     {/* <Footer/> */}

      </>
    );
    return design;
}
export default PageRotuing;