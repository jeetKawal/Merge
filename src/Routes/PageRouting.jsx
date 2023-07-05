import React from "react";

import SignUp from "../Login/SignUp";
import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgotPassword";

import Auto_two_step from "../Login/Auto_two_step";
import{Routes,Route}from "react-router-dom";
import MainContent from "../Component/MainContent";
import ManagerDashboard from "../ManagerComponent/ManagerDashboard";
import ManagerLeave from "../ManagerComponent/ManagerLeave";
import ManagerAttendance from "../ManagerComponent/ManagerAttendance";
import ManagerExpense from "../ManagerComponent/ManagerExpense";
import ManagerAlert from "../ManagerComponent/ManagerAlert";


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
      <Route path="/managerdashboard" component={ManagerDashboard}/>
      <Route path="/managerleave" component={ManagerLeave}/>
      <Route path="/managerattendance" component={ManagerAttendance}/>
      <Route path="/managerexpense" component={ManagerExpense}/>
      <Route path="/manageralert" component={ManagerAlert}/>

      </Routes>
      </>
    );
    return design;
}
export default PageRouting;