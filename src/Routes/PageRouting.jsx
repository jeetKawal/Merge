import React from "react";

import SignUp from "../Login/SignUp";
import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgotPassword";

import Auto_two_step from "../Login/Auto_two_step";
import{BrowserRouter,Routes,Route}from "react-router-dom";
import MainContent from "../Component/MainContent";

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
      </Routes>
      </>
    );
    return design;
}
export default PageRouting;