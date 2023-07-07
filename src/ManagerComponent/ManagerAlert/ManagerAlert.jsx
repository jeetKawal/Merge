import ManagerHeader from "../../Component/Headers/ManagerHeader";
import React from "react";
import AlertToggleBtn from "./AlertToggleBtn";
import AlertSlideDown from "./AlertSlideDown";
import AlertToolbar from "./AlertToolbar";
import Footer from "../../Component/Footer/Footer";
import ManagerSideBar from "../../Component/SideBar/ManagerSideBar";
import ALertHeader from "./AlertHeader";
import FilterCard from "./Card/FilterCard";
import FilterTable from "./Card/FilterTable";
import AlertAttendance from "./Card/AlertAttendance";
import AlertExpense from "./Card/AlertExpense";
import AlertSeparation from "./Card/AlertSeparation";
import ChangePasswordForm from "./ManagerProfile/ChangePasswordForm";
import ChangePasswordOtp from "./ManagerProfile/ChangePasswordOtp";
import ProceedRequest from "./ManagerProfile/ProceedRequest";
const ManagerAlert =()=>{
    const design =(
<>
  <div>
    <ManagerSideBar/>
    </div>
  {/* start: body area */}
  <div className="wrapper" style={{ overflowY: "scroll", overflowX: "hidden" }}>
    {/* start: page header */}
    <header className="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
      <div className="container-fluid">
        <nav className="navbar">
          {/* start: toggle btnh */}
        <AlertToggleBtn/>
          <div className="main-search px-3 flex-fill">
            <input
              className="form-control cntrl"
              type="text"
              placeholder="Search employee"
            />
            <AlertSlideDown/>
           </div>
          {/* start: search area */}
          {/* <div class="header-left flex-grow-1"> */}
          <div>
            <ManagerHeader/>
          </div>
          {/* </div> */}
        </nav>
      </div>
    </header>
    {/* start: page toolbar */}
 <AlertToolbar/>
    {/* start: page body */}
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-3">
      <div className="container-fluid">
     <ALertHeader/>
        <div className="tab-content mt-4 mb-4">
          {/* Tab: Leaves */}
          <div
            className="tab-pane fade show active"
            id="leaves"
            role="tabpanel"
          >
            {/* <div class="row-title">
                              <h5>Leaves</h5>
                          </div> */}
            <div className="card mt-2">
             <FilterCard/>
              <div className="card-body">
             <FilterTable/>
              </div>
            </div>
          </div>
          {/* Tab: Attendance */}
         <AlertAttendance/>
          {/* Tab: Expense */}
        <AlertExpense/>
          {/* Tab: Separation */}
        <AlertSeparation/>
          {/* offcanvas: Proceed Request */}
        <ProceedRequest/>
        </div>
      </div>
    </div>
    {/* offcanvas: change password */}
 <ChangePasswordForm/>
    {/* offcanvas: change password - OTP popup */}
  <ChangePasswordOtp/>
    {/* start: page footer */}
    <div>
      <Footer/>
      </div>
  </div>
  {/* Jquery Core Js */}
  {/* Plugin Js */}
  {/* Jquery Page Js */}
  {/* Jquery Page Js */}
</>

    );
    return design;
}
export default ManagerAlert;