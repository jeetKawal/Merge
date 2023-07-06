import React from "react";
import Footer from "../../Component/Footer/Footer";
import ManagerSideBar from "../../Component/SideBar/ManagerSideBar";
import ManagerHeader from "../../Component/Headers/ManagerHeader";
const ManagerCalender =()=>{
    const design =(
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
                Calendar
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* start: page body */}
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-3">
      <div className="container-fluid">
        <div className="">
          <h4>Calendar</h4>
        </div>
        <div className="row g-3 row-deck">
          <div className="col-sm-12">
            <div className="card tui-calendar">
              <div className="card-body">
                <div
                  className="col-12 d-flex flex-wrap justify-content-between align-items-center"
                  id="menu-navi"
                >
                  <div className="d-flex align-items-center my-1">
                    <button
                      className="btn btn-primary move-today"
                      type="button"
                      data-action="move-today"
                    >
                      Today
                    </button>
                  </div>
                  <div className="fs-5 fw-bold my-1" id="renderRange" />
                  <div className="d-flex align-items-center my-1">
                    <div className="dropdown morphing scale-left">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        id="dropdownMenu-calendarType"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        <i id="calendarTypeIcon" />
                        <span className="ms-1" id="calendarTypeName">
                          Dropdown
                        </span>
                      </button>
                      <ul className="dropdown-menu border-0 shadow" role="menu">
                        <li role="presentation">
                          <a
                            className="dropdown-item dropdown-menu-title"
                            role="menuitem"
                            data-action="toggle-daily"
                          >
                            <i className="fa fa-bars me-2" />
                            Daily
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="dropdown-item dropdown-menu-title"
                            role="menuitem"
                            data-action="toggle-weekly"
                          >
                            <i className="fa fa-th-large me-2" />
                            Weekly
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="dropdown-item dropdown-menu-title"
                            role="menuitem"
                            data-action="toggle-monthly"
                          >
                            <i className="fa fa-th me-2" />
                            Month
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="dropdown-item dropdown-menu-title"
                            role="menuitem"
                            data-action="toggle-weeks2"
                          >
                            <i className="fa fa-th-large me-2" />2 weeks
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="dropdown-item dropdown-menu-title"
                            role="menuitem"
                            data-action="toggle-weeks3"
                          >
                            <i className="fa fa-th-large me-2" />3 weeks
                          </a>
                        </li>
                        <li className="dropdown-divider" role="presentation" />
                        <li role="presentation">
                          <a
                            className="dropdown-item"
                            role="menuitem"
                            data-action="toggle-workweek"
                          >
                            {" "}
                            <input
                              className="tui-full-calendar-checkbox-square"
                              type="checkbox"
                              defaultValue="toggle-workweek"
                              defaultChecked=""
                            />
                            <span className="checkbox-title" />
                            Show weekends
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="dropdown-item"
                            role="menuitem"
                            data-action="toggle-start-day-1"
                          >
                            {" "}
                            <input
                              className="tui-full-calendar-checkbox-square"
                              type="checkbox"
                              defaultValue="toggle-start-day-1"
                            />
                            <span className="checkbox-title" />
                            Start Week on Monday
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="dropdown-item"
                            role="menuitem"
                            data-action="toggle-narrow-weekend"
                          >
                            {" "}
                            <input
                              className="tui-full-calendar-checkbox-square"
                              type="checkbox"
                              defaultValue="toggle-narrow-weekend"
                            />
                            <span className="checkbox-title" />
                            Narrower than weekdays
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ms-2">
                      <button
                        className="btn btn-outline-secondary move-day"
                        type="button"
                        data-action="move-prev"
                      >
                        <i
                          className="fa fa-angle-left"
                          data-action="move-prev"
                        />
                      </button>
                      <button
                        className="btn btn-outline-secondary move-day"
                        type="button"
                        data-action="move-next"
                      >
                        <i
                          className="fa fa-angle-right"
                          data-action="move-next"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light px-4 py-2" id="lnb">
                <div
                  className="d-flex flex-wrap justify-content-between align-items-center"
                  id="lnb-calendars"
                >
                  <div className="d-flex flex-wrap" id="calendarList" />
                  <div className="lnb-calendars-item">
                    <label>
                      <input
                        className="tui-full-calendar-checkbox-square"
                        type="checkbox"
                        defaultValue="all"
                        defaultChecked=""
                      />
                      <span />
                      <strong>View all</strong>
                    </label>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="border" id="calendar" />
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

        </>
    );
    return design;
}
export default ManagerCalender;