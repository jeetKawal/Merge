import React  from "react";
import HrHeader from "../../../../../Component/Headers/HrHeader";
import Footer from "../../../../../Component/Footer/Footer"
const HREmployeeStatus=()=>{
    return(
        <>
      
        {/* start: sidebar */}
        <div w3-include-html="include/hr_sidebar.html" />
        {/* start: body area */}
        <div className="wrapper" style={{ overflowY: "scroll" }}>
          {/* start: page header */}
          <header className="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
            <div className="container-fluid">
              <nav className="navbar">
                {/* start: toggle btn */}
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-link d-none d-xl-block sidebar-mini-btn p-0 text-primary"
                  >
                    <span className="hamburger-icon">
                      <span className="line" />
                      <span className="line" />
                      <span className="line" />
                    </span>
                  </button>
                  <a
                    href="#"
                    className="brand-icon d-flex align-items-center mx-2 mx-sm-3 text-primary"
                  />
                  <button
                    type="button"
                    className="btn btn-link d-block d-xl-none menu-toggle p-0 text-primary"
                  >
                    <span className="hamburger-icon">
                      <span className="line" />
                      <span className="line" />
                      <span className="line" />
                    </span>
                  </button>
                  <a
                    href="#"
                    className="brand-icon d-flex align-items-center mx-2 mx-sm-3 text-primary"
                  >
                    <img
                      src="assets/images/logo/logo.png"
                      alt="Mynd"
                      style={{ height: 40 }}
                    />
                  </a>
                </div>
                <div className="header-left flex-grow-1 d-none d-md-block">
                  <div className="main-search px-3 flex-fill">
                    <input
                      className="form-control cntrl"
                      type="text"
                      placeholder="Search employee"
                    />
                    <div className="card shadow rounded-4 search-result slidedown">
                      <div className="card-body">
                        <small className="text-uppercase text-muted">
                          Recent searches
                        </small>
                        <div className="d-flex flex-wrap align-items-start mt-2 mb-4">
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-primary text-white"
                            href="#"
                          >
                            Shefali Jain
                          </a>
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-secondary text-white"
                            href="#"
                          >
                            Raunak Sharma
                          </a>
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-info text-white"
                            href="#"
                          >
                            Rohit Kumar
                          </a>
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-dark text-white"
                            href="#"
                          >
                            Kevin Gill
                          </a>
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-danger text-white"
                            href="#"
                          >
                            Shubham Gill
                          </a>
                        </div>
                        <small className="text-uppercase text-muted">
                          Suggestions
                        </small>
                        <div className="card list-group list-group-flush list-group-custom mt-2">
                          <a
                            className="list-group-item list-group-item-action text-truncate"
                            href="#"
                          >
                            <div className="fw-bold">Mark Anthony</div>
                            <small className="text-muted">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                            </small>
                          </a>
                          <a
                            className="list-group-item list-group-item-action text-truncate"
                            href="#"
                          >
                            <div className="fw-bold">Sakshi Gaur</div>
                            <small className="text-muted">
                              There are many variations of passages of Lorem Ipsum
                              available
                            </small>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* start: search area */}
                <div> 
                  <HrHeader/>
                </div>
                {/* </div> */}
              </nav>
            </div>
          </header>
          {/* start: page toolbar */}
          <div className="page-toolbar px-xl-4 px-sm-2 px-0 pt-3">
            <div className="container-fluid">
              <div className="row mb-3 align-items-center">
                <div className="col">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                      <a className="text-secondary" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Employee onboarding
                    </li>
                  </ol>
                </div>
              </div>{" "}
              {/* .row end */}
            </div>
          </div>
          {/* start: page body */}
          <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-3">
            <div className="container-fluid">
              <div className="row g-3 ">
                <div className="col-12 ">
                  <div className="row-title justify-content-between mb-1">
                    <h5 className="pt-2">Employee onboarding</h5>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Onboarding status</h5>
                    </div>
                    <div className="card-body col-lg-12 row rmargin">
                      <div className="col-lg-1 py-1">
                        <h6 className="pt-2">Filters</h6>
                      </div>
                      <div className="col-lg-2 py-1">
                        <div className="">
                          <input
                            className="form-control borad"
                            type="text"
                            placeholder="Search by ID"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12  py-1">
                        <div
                          className=" border rounded ypad"
                          id="reportrange"
                          style={{
                            background: "#fff",
                            cursor: "pointer",
                            padding: "5px 10px",
                            border: "1px solid #ccc",
                            width: "100%"
                          }}
                        >
                          <i className="fa fa-calendar" />
                          &nbsp;<span>March 8, 2022 - April 6, 2022</span>
                          <i className="fa fa-caret-down" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-12  py-1">
                        <select className="form-select borad">
                          <option selected="">Status</option>
                          <option>Completed</option>
                          <option>Pending</option>
                          <option>Ready for review</option>
                          <option>In progress</option>
                        </select>
                      </div>
                      <div className="col-lg-2 col-md-9 py-1">
                        <button className="btn btn-custom mx-2">Apply</button>
                        <a href="#">Cancel</a>
                      </div>
                    </div>
                    <div className="card-body">
                      <table className="table table-hover align-middle mb-0 card-table myDataTable">
                        <thead>
                          <tr>
                            <th>Employee ID</th>
                            <th>Email</th>
                            <th>Date of Joining</th>
                            <th>Sent date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>J-000A1</td>
                            <td>abc@mail.com</td>
                            <td>18 Jan, 2022</td>
                            <td>18 Jan, 2022</td>
                            <td>
                              <span className="badge bg-success">Completed</span>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-link btn-sm color-400"
                                title="View"
                              >
                                <a href="/profile_detailed">
                                  <i className="fa fa-eye" />
                                </a>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>J-000A2</td>
                            <td>abc@mail.com</td>
                            <td>18 Jan, 2022</td>
                            <td>18 Jan, 2022</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-link btn-sm color-400"
                                title="View"
                              >
                                <a href="profile_detailed.html">
                                  <i className="fa fa-eye" />
                                </a>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>J-000B2</td>
                            <td>abc@mail.com</td>
                            <td>18 Jan, 2022</td>
                            <td>18 Jan, 2022</td>
                            <td>
                              <span className="badge bg-info">In progress</span>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-link btn-sm color-400"
                                title="View"
                              >
                                <a href="profile_detailed.html">
                                  <i className="fa fa-eye" />
                                </a>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>J-000B3</td>
                            <td>abc@mail.com</td>
                            <td>18 Jan, 2022</td>
                            <td>18 Jan, 2022</td>
                            <td>
                              <span className="badge bg-secondary">
                                Ready for review
                              </span>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-link btn-sm color-400"
                                title="View"
                              >
                                <a href="profile_detailed.html">
                                  <i className="fa fa-eye" />
                                </a>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* offcanvas: Modify Request */}
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="modify_request"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title">
                        Attendance modification request
                      </h5>
                      <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                    <div className="offcanvas-body">
                      <form className="row g-3">
                        <div className="col-6">
                          <label className="form-label">Date</label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="date"
                            readOnly=""
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Shift</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Day"
                            readOnly=""
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-label">In</label>
                          <input
                            type="time"
                            className="form-control"
                            placeholder="From date"
                            readOnly=""
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-label">Out</label>
                          <input
                            type="time"
                            className="form-control"
                            placeholder="To date"
                            readOnly=""
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Reason</label>
                          <textarea
                            className="form-control"
                            placeholder="State your reason..."
                            style={{ height: 100 }}
                            readOnly=""
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Manager Remarks</label>
                          <textarea
                            className="form-control"
                            placeholder="State your reason..."
                            style={{ height: 100 }}
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn bg-success text-light">
                            Approve
                          </button>
                          <button
                            type="button"
                            className="btn bg-danger text-light"
                            data-bs-dismiss="offcanvas"
                          >
                            Reject
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* offcanvas: Past attendance Request */}
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="patt_request"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title">Past attendance request</h5>
                      <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                    <div className="offcanvas-body">
                      <form className="row g-3">
                        <div className="col-6">
                          <label className="form-label">Date</label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="date"
                            readOnly=""
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Shift</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Day"
                            readOnly=""
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-label">In</label>
                          <input
                            type="time"
                            className="form-control"
                            placeholder="From date"
                            readOnly=""
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-label">Out</label>
                          <input
                            type="time"
                            className="form-control"
                            placeholder="To date"
                            readOnly=""
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Reason</label>
                          <textarea
                            className="form-control"
                            placeholder="State your reason..."
                            style={{ height: 100 }}
                            readOnly=""
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Manager Remarks</label>
                          <textarea
                            className="form-control"
                            placeholder="State your reason..."
                            style={{ height: 100 }}
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn bg-success text-light">
                            Approve
                          </button>
                          <button
                            type="button"
                            className="btn bg-danger text-light"
                            data-bs-dismiss="offcanvas"
                          >
                            Reject
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* offcanvas: Proceed Request */}
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="proceed_req"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" />
                      <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                    <div className="offcanvas-body">
                      <form className="row g-3">
                        <div className="col-12 text-center">
                          <span className="pt-2 h4">You've selected all items.</span>
                        </div>
                        <div className="col-12">
                          <label className="form-label">Manager Remarks</label>
                          <textarea
                            className="form-control"
                            placeholder="State your reason..."
                            style={{ height: 100 }}
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn bg-success text-light">
                            Approve
                          </button>
                          <button
                            type="button"
                            className="btn bg-danger text-light"
                            data-bs-dismiss="offcanvas"
                          >
                            Reject
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>{" "}
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
          <div>
            <Footer/>
          </div>
        </div>
        {/* Jquery Core Js */}
        {/* Plugin Js */}
        {/* Jquery Page Js */}
      </>
      
    );
}
export default HREmployeeStatus;