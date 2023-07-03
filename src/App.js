import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./EmployeeComponent/Employee";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* {Login page routes} */}
          <Route path="/login" element={<Employee />}>

            {/* {SignUp Routes} */}

            <Route path="/signup" element={<Employee />}>
              <Route path="/auth-two-step" element={<Employee />}>
                <Route path="/login" element={"<Employee />"} />
              </Route>
            </Route>

            {/* {Forgot Password Routes} */}
            <Route path="/forgotpassword" element={<Employee />}>
              <Route path="/auth-two-step" element={<Employee />}>
                <Route path="/login" element={"<Employee />"} />
              </Route>
            </Route>
           
  
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
