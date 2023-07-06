import React from "react";
import Footer from "../../Component/Footer/Footer";
import ManagerSideBar from "../../Component/SideBar/ManagerSideBar";
import ManagerHeader from "../../Component/Headers/ManagerHeader";
const ManagerDirectory=()=>{
    const design=(
        <>
        <>
 
  {/* start: sidebar */}
  <div>
    <ManagerSideBar/>
    </div>
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
            <ManagerHeader/>
            </div>
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
                Directory
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
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="">Directory</h4>
          </div>
        </div>
        <div className="card-title col-lg-12 row py-10 rmargin wid">
          <div className="col-lg-1 py-1">
            <h6 className="pt-2">Filters</h6>
          </div>
          <div className="col-lg-2 py-1">
            <div className="">
              <input
                className="form-control borad"
                type="text"
                placeholder="Name search"
              />
            </div>
          </div>
          <div className="col-lg-2 py-1">
            <div className="">
              <input
                className="form-control borad"
                type="text"
                placeholder="Designation search"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-1">
            <button className="btn btn-custom mx-2">Apply</button>
            <a href="#">Cancel</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="">
              <div className="col-lg-12 row">
                <div className="col-sm-3  mb-1">
                  <a href="dir_profile.html">
                    <div className="card text-center overflow-hidden">
                      <div className="card-body pt-4 pb-2">
                        <img
                          src="assets/images/lg/avatar1.jpg"
                          alt="Avatar"
                          className="rounded-circle avatar xl shadow img-thumbnail"
                        />
                      </div>
                      <div className="card-footer border-0">
                        <h6>Shubham Gill</h6>
                        <span className="color-400">Web Designer</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-3 mb-1">
                  <a href="dir_profile.html">
                    <div className="card text-center overflow-hidden">
                      <div className="card-body pt-4 pb-2">
                        <img
                          src="assets/images/lg/avatar2.jpg"
                          alt="Avatar"
                          className="rounded-circle avatar xl shadow img-thumbnail"
                        />
                      </div>
                      <div className="card-footer border-0">
                        <h6>Rohit Kumar</h6>
                        <span className="color-400">Full stack developer</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-3 mb-1">
                  <a href="dir_profile.html">
                    <div className="card text-center overflow-hidden">
                      <div className="card-body pt-4 pb-2">
                        <img
                          src="assets/images/lg/avatar3.jpg"
                          alt="Avatar"
                          className="rounded-circle avatar xl shadow img-thumbnail"
                        />
                      </div>
                      <div className="card-footer border-0">
                        <h6>Raunak Sharma</h6>
                        <span className="color-400">Tester</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-3 mb-1">
                  <div className="card text-center overflow-hidden">
                    <div className="card-body pt-4 pb-2">
                      <img
                        src="assets/images/lg/avatar1.jpg"
                        alt="Avatar"
                        className="rounded-circle avatar xl shadow img-thumbnail"
                      />
                    </div>
                    <div className="card-footer border-0">
                      <h6>Kevin Gill</h6>
                      <span className="color-400">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-12 row pt-4">
                <div className="col-sm-3">
                  <div className="card text-center overflow-hidden">
                    <div className="card-body pt-4 pb-2">
                      <img
                        src="assets/images/lg/avatar4.jpg"
                        alt="Avatar"
                        className="rounded-circle avatar xl shadow img-thumbnail"
                      />
                    </div>
                    <div className="card-footer border-0">
                      <h6>Robin Verma</h6>
                      <span className="color-400">.NET developer</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center overflow-hidden">
                    <div className="card-body pt-4 pb-2">
                      <img
                        src="assets/images/lg/avatar5.jpg"
                        alt="Avatar"
                        className="rounded-circle avatar xl shadow img-thumbnail"
                      />
                    </div>
                    <div className="card-footer border-0">
                      <h6>Shefali Jain</h6>
                      <span className="color-400">Web Designer</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center overflow-hidden">
                    <div className="card-body pt-4 pb-2">
                      <img
                        src="assets/images/lg/avatar7.jpg"
                        alt="Avatar"
                        className="rounded-circle avatar xl shadow img-thumbnail"
                      />
                    </div>
                    <div className="card-footer border-0">
                      <h6>Abhi Singh</h6>
                      <span className="color-400">HR Manager</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 pb-sm-1">
                  <div className="card text-center overflow-hidden">
                    <div className="card-body pt-4 pb-2">
                      <img
                        src="assets/images/lg/avatar1.jpg"
                        alt="Avatar"
                        className="rounded-circle avatar xl shadow img-thumbnail"
                      />
                    </div>
                    <div className="card-footer border-0">
                      <h6>Sakshi Gaur</h6>
                      <span className="color-400">Jr. UI/UX Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Row end  */}
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

        </>
    );
    return design;
}
export default ManagerDirectory;