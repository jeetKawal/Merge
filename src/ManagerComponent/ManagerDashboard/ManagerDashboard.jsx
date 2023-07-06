import React from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Headers/Header";
import ManagerDashboardToggleBtn from "./ManagerDashoardToggleBtn";
import ManagerDashboardSlideDown from "./ManagerDashboardSlideDown";
import ManagerDashboardToolbar from "./ManagerDashboardToolbar";
import Managercard from "./Card/ManagerCard";
import ManagerPunctuality from "./Card/ManagerPunctuality";
import ManagerDashboardExpense from "./Card/ManangerDashboardExpense";
import ManagerDashboardLeaves from "./Card/ManagerDashboardLeaves";
import ManagerDashboardLeaveStatus from "./Card/ManangerDashboardLeaveStatus";
import ManagerDashboardAlerts from "./Card/ManagerDashboardAlerts";
const ManagerDashboard=()=>{
    const design= (
        <>

  {/* start: sidebar */}
  <div w3-include-html="include/mngr_sidebar.html" />
  {/* start: body area */}
  <div className="wrapper" style={{ overflowY: "scroll", overflowX: "hidden" }}>
    {/* start: page header */}
    <header className="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
      <div className="container-fluid">
        <nav className="navbar">
          {/* start: toggle btnh */}
      <ManagerDashboardToggleBtn/>
          <div className="main-search px-3 flex-fill">
            <input
              className="form-control cntrl"
              type="text"
              placeholder="Search employee"
            />
           <ManagerDashboardSlideDown/>
          </div>
          {/* start: search area */}
          <div w3-include-html={<Header/>} />
        </nav>
      </div>
    </header>
    {/* start: page toolbar */}
   <ManagerDashboardToolbar/>
    {/* start: page body */}
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-3">
      <div className="container-fluid">
       <Managercard/>
        <div className="row g-3 mb-3 row-deck">
          <div className="col-lg-8 col-md-12">
          <ManagerPunctuality/>
            {/* .card end */}
          </div>
          <div className="col-lg-4 col-md-12">
        <ManagerDashboardExpense/>
            {/* .card end */}
          </div>
        </div>
        <div className="row g-3 mb-3 row-deck">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
            <ManagerDashboardLeaves/>
            {/* .card end */}
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
           <ManagerDashboardLeaveStatus/>
            {/* .card end */}
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
           <ManagerDashboardAlerts/>
            {/* .card end */}
          </div>
        </div>
        {/* .row end */}
      </div>
    </div>
    {/* offcanvas: change password */}
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="change_pass">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Change password</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <form className="row g-3">
          <div className="col-md-12">
            <label className="form-label">Old Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="***********"
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="***********"
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Confirm Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="***********"
            />
          </div>
          <div className="col-12">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#pass_otp"
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="offcanvas"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* offcanvas: change password - OTP popup */}
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="pass_otp">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">2-step Verification</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <form className="row g-3">
          <div className="col-md-12">
            <span className="text-muted">
              We sent a verification code to your phone number. Enter the code
              in the field below.
            </span>
          </div>
          <div className="col">
            <div className="mb-2">
              <input
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="-"
                maxLength={1}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-2">
              <input
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="-"
                maxLength={1}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-2">
              <input
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="-"
                maxLength={1}
              />
            </div>
          </div>
          <div className="col-12">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="offcanvas"
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="offcanvas"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* start: page footer */}
    <div w3-include-html={<Footer/>} />
  </div>
  {/* Jquery Core Js */}
  {/* Plugin Js */}
  {/* Jquery Page Js */}
  {/* Jquery Page Js */}
</>

    );
    return design;
}
export default ManagerDashboard;