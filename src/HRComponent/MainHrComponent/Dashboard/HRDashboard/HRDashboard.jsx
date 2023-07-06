import React from "react";
import HRHeader from "./HRHeader";
import PageToolbar from "./PageToolbar";
import Cards from "./Cards/Cards";
import PunctualityExpense from "./Cards/PunctualityExpense";
import LeavesAlerts from "./Cards/LeavesAlerts";
import Footer from "../../../../Component/Footer/Footer";
import HrSideBar from "../../../../Component/SideBar/HrSideBar"
const HRDashboard=()=>{
    return(
        <>
        
  
  {/* start: sidebar */}
  <div>
    <HrSideBar/>
    </div>
  {/* start: body area */}
   <div className="wrapper" style={{ overflowY: "scroll", overflowX: "hidden" }}>
    {/* start: page header */}
    <HRHeader/>
    {/* start: page toolbar */}
   <PageToolbar/> 
    {/* start: page body */}
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-3">
      <div className="container-fluid">
       <Cards/>
       <PunctualityExpense/>
       <LeavesAlerts/>
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
    {/* <div w3-include-html="include/footer.html" /> */}
    <div>
      <Footer/>
    </div>
  </div>
</>

    );
}
export default HRDashboard;