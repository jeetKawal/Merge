import React from "react";

import SignUp from "../Login/SignUp";
import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgotPassword";

import Auto_two_step from "../Login/Auto_two_step";
import{BrowserRouter,Routes,Route}from "react-router-dom";
import MainContent from "../Component/MainContent";
import HRDashboard from "../HRComponent/MainHrComponent/Dashboard/HRDashboard";
import HRAttendance from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRAttendance";
import HREmployeeStatus from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/Onboarding/HREmployeeStatus";
import HRSepration from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRSepration";
import HRExpenses from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRExpenses";
import HRLeaves from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRLeaves";
import HRAlerts from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/HRAlerts";
import Profiledetails from "../HRComponent/MainHrComponent/Dashboard/DashboardCards/Onboarding/ProfileDetails";

const PageRouting =()=>{
    const design =(
        <>
<MainContent/>
<Routes>
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={SignUp} /> 
      <Route path="/forgotpassword" component={ForgotPassword}/>
      <Route path="/auto_two_step" component={Auto_two_step}/>
      <Route path="/auto_two_step#" component={Auto_two_step}/>

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
      </>
    );
    return design;
}
export default PageRouting;