import React from "react";
import Headers from './Component/Header'
import SignUp from "./Login/SignUp";
import Login from "./Login/Login";
import ForgotPassword from "./Login/ForgotPassword";
import Dashboard from "./EmployeeComponent/Dashboard";
import Auto_two_step from "./Login/Auto_two_step";
import{BrowserRouter,Routes,Route}from "react-router-dom";
import MainContent from "./Component/MainContent";


function App() {
  return (
   <>
   <MainContent/>

<Routes>
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={SignUp} /> 
      <Route path="/forgotpassword" component={ForgotPassword}/>
      <Route path="/auto_two_step" component={Auto_two_step}/>
      <Route path="/#" component={Login}/>
      </Routes>
   </>
  );
}

export default App;
