import React from "react";
import Headers from './Component/Header'
import SignUp from "./Login/SignUp";
import Login from "./Login/Login";
import ForgetPassword from "./Login/ForgetPassword";
import Dashboard from "./EmployeeComponent/Dashboard";
import Auto_two_step from "./Login/Auto_two_step";
import{BrowserRouter,Routes,Route}from "react-router-dom";


function App() {
  return (
   <>
<Login/>
  <BrowserRouter>
        <Routes>
          {/* {Login page routes} */}
          <Route path="/login" element={<Login />}>     </Route>

            {/* {SignUp Routes} */}

            <Route path="/signup" element={<SignUp />}> </Route>
              <Route path="/auth-two-step" element={<Auto_two_step />}>
          </Route>
                <Route path="/login" element={<Login/>} />
         
           

            {/* {Forgot Password Routes} */}
            <Route path="/forgotpassword" element={<ForgetPassword />}></Route>
              <Route path="/auth-two-step" element={<Auto_two_step />}></Route>
                <Route path="/login" element={<Login/>} />
              
            
           
  
        </Routes>
      </BrowserRouter>
 
   </>
  );
}

export default App;
