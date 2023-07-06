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
      <Route path="/managerdashboard" component={ManagerDashboard}/>
      <Route path="/managerleave" component={ManagerLeave}/>
      <Route path="/managerattendance" component={ManagerAttendance}/>
      <Route path="/managerexpense" component={ManagerExpense}/>
      <Route path="/manageralert" component={ManagerAlert}/>
      <Route path="/header" component={Header}/>



      {/* HR Routes */}
      <Route path="/hr_dashboard" component={HRDashboard}/>
      <Route path="/hr_emp_status" component={HREmployeeStatus}/>
      <Route path="/hr_sep_dash" component={HRSepration}/>
      <Route path="/hr_attendance" component={HRAttendance}/>
      <Route path="/hr_expense" component={HRExpenses}/>
      <Route path="/hr_leaves" component={HRLeaves}/>
      <Route path="/hr_alerts" component={HRAlerts}/>
      <Route path="/profile_detailed" component={Profiledetails}/>

      


      </Routes>
     {/* <Footer/> */}

      </>
    );
    return design;
}
export default PageRotuing;