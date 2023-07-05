import React from "react";
const HRAlerts=()=>{
    return(
        <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="keyword" content="" />
  <title>:: HRIS :: Alerts</title>
  <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Favicon*/}
  {/* plugin css file  */}
  <link rel="stylesheet" href="assets/css/daterangepicker.min.css" />
  <link rel="stylesheet" href="assets/css/dataTables.min.css" />
  {/* project css file  */}
  <link rel="stylesheet" href="assets/css/luno.style.min.css" />
  <link rel="stylesheet" href="assets/css/custom.css" />
  {/* start: sidebar */}
  <div w3-include-html="include/hr_sidebar.html" />
  {/* start: body area */}
  <div className="wrapper" style={{ overflowY: "scroll", overflowX: "hidden" }}>
    {/* start: page header */}
    <header className="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
      <div className="container-fluid">
        <nav className="navbar">
          {/* start: toggle btnh */}
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
                <small className="text-uppercase text-muted">Suggestions</small>
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
          {/* start: search area */}
          <div w3-include-html="include/hr_header.html" />
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
                <a className="text-secondary" href="hr_alerts.html">
                  Alerts
                </a>
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
        <div className="">
          <h4>Alerts</h4>
        </div>
        <ul
          className="nav nav-tabs tab-card border-bottom-0 pt-2 fs-6 justify-content-center justify-content-md-start"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              href="#leaves"
              role="tab"
            >
              <i className="fa fa-calendar-o" />
              <span className="d-none d-sm-inline-block ms-2">Leaves</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#attendance"
              role="tab"
            >
              <i className="fa fa-clock-o" />
              <span className="d-none d-sm-inline-block ms-2">Attendance</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#expenses"
              role="tab"
            >
              <i className="fa fa-money" />
              <span className="d-none d-sm-inline-block ms-2">Expense</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#separation"
              role="tab"
            >
              <i className="fa fa-sign-out" />
              <span className="d-none d-sm-inline-block ms-2">Separation</span>
            </a>
          </li>
        </ul>
        <div className="tab-content mt-4 mb-4">
          {/* Tab: Leaves */}
          <div
            className="tab-pane fade show active"
            id="leaves"
            role="tabpanel"
          >
            <div className="card mt-2">
              <div className=" col-lg-12 row rmargin">
                <div className="col-lg-1 py-1">
                  <h6 className="pt-2">Filters</h6>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12  py-1">
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
                <div className="col-lg-2 col-md-6 py-1">
                  <select className="form-select borad">
                    <option selected="">Type</option>
                    <option>Earned Leave</option>
                    <option>Casual Leave</option>
                    <option>Sick Leave</option>
                    <option>Restricted Holiday</option>
                    <option>Compensatory-Off</option>
                    <option>Paternity Leave</option>
                  </select>
                </div>
                <div className="col-lg-2 col-md-6 py-1">
                  <div className="">
                    <input
                      className="form-control borad"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-10 py-1">
                  <button className="btn btn-custom mx-2">Apply</button>
                  <a href="#">Cancel</a>
                </div>
                <div className="col-lg-1 col-md-2 py-1" id="buttons">
                  <button
                    type="submit"
                    className="btn bg-transparent border-primary text-primary"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#proceed_req"
                    data-bs-placement="top"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <div className="card-body">
                <table id="contact_list" className="table align-middle mb-0">
                  <thead style={{ borderBottom: "white" }}>
                    <tr>
                      <th style={{ width: 20 }}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="checkAll"
                          />
                        </div>
                      </th>
                      <th />
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                        </div>
                      </td>
                      <td style={{ width: 190 }}>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar1.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Shubham Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div>
                          <div className="mb-0">
                            Shubham has applied for 3 days leave.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar2.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Rohit Kumar</div>
                              <span className="text-muted">
                                Full stack developer
                              </span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Rohit has applied for 3 days leave.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">2 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="tableCheckbox"
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar3.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Raunak Sharma</div>
                              <span className="text-muted">Tester</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Raunak has applied for 1 day leave.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="tableCheckbox"
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar4.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Kevin Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Kevin has applied for 3 days leave.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Tab: Attendance */}
          <div className="tab-pane fade" id="attendance" role="tabpanel">
            <div className="card mt-2">
              <div className=" col-lg-12 row rmargin">
                <div className="col-lg-1 py-1">
                  <h6 className="pt-2">Filters</h6>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12  py-1">
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
                <div className="col-lg-2 col-md-6 py-1">
                  <div className="">
                    <input
                      className="form-control borad"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-9 py-1">
                  <button className="btn btn-custom mx-2">Apply</button>
                  <a href="#">Cancel</a>
                </div>
                <div className="col-lg-2 col-md-6 py-1"></div>
                <div className="col-lg-1 col-md-4 py-1" id="buttons1">
                  <button
                    type="submit"
                    className="btn bg-transparent border-primary text-primary"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#proceed_req"
                    data-bs-placement="top"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <div className="card-body">
                <table id="contact_list" className="table align-middle mb-0">
                  <thead style={{ borderBottom: "white" }}>
                    <tr>
                      <th style={{ width: 20 }}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton1()"
                            id="checkAll1"
                          />
                        </div>
                      </th>
                      <th />
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                        </div>
                      </td>
                      <td style={{ width: 190 }}>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar1.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Shubham Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Shubham has applied for past attendance.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar2.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Rohit Kumar</div>
                              <span className="text-muted">
                                Full stack developer
                              </span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Rohit has applied for past attendance.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">2 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="tableCheckbox"
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar3.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Raunak Sharma</div>
                              <span className="text-muted">Tester</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Raunak has applied ffor past attendance.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="tableCheckbox"
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar4.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Kevin Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Kevin has applied for past attendance.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Tab: Expense */}
          <div className="tab-pane fade" id="expenses" role="tabpanel">
            <div className="card mt-2">
              <div className=" col-lg-12 row rmargin">
                <div className="col-lg-1 py-1">
                  <h6 className="pt-2">Filters</h6>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12  py-1">
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
                <div className="col-lg-2 col-md-6 py-1">
                  <select className="form-select borad">
                    <option selected="">Type</option>
                    <option>Earned Leave</option>
                    <option>Casual Leave</option>
                    <option>Sick Leave</option>
                    <option>Restricted Holiday</option>
                    <option>Compensatory-Off</option>
                    <option>Paternity Leave</option>
                  </select>
                </div>
                <div className="col-lg-2 col-md-6 py-1">
                  <div className="">
                    <input
                      className="form-control borad"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-9 py-1">
                  <button className="btn btn-custom mx-2">Apply</button>
                  <a href="#">Cancel</a>
                </div>
                <div className="col-lg-1 col-md-4 py-1" id="buttons2">
                  <button
                    type="submit"
                    className="btn bg-transparent border-primary text-primary"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#proceed_req"
                    data-bs-placement="top"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <div className="card-body">
                <table id="contact_list" className="table align-middle mb-0">
                  <thead style={{ borderBottom: "white" }}>
                    <tr>
                      <th style={{ width: 20 }}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton2()"
                            id="checkAll2"
                          />
                        </div>
                      </th>
                      <th />
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                        </div>
                      </td>
                      <td style={{ width: 190 }}>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar1.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Shubham Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div>
                          <div className="mb-0">
                            Shubham has applied for Expense reimbursement.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar2.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Rohit Kumar</div>
                              <span className="text-muted">
                                Full stack developer
                              </span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Rohit has applied for Expense reimbursement.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">2 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="tableCheckbox"
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar3.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Raunak Sharma</div>
                              <span className="text-muted">Tester</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Raunak has applied for Expense reimbursement.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="tableCheckbox"
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar4.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Kevin Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Kevin has applied for Expense reimbursement.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Tab: Separation */}
          <div className="tab-pane fade" id="separation" role="tabpanel">
            <div className="card mt-2">
              <div className=" col-lg-12 row rmargin">
                <div className="col-lg-1 py-1">
                  <h6 className="pt-2">Filters</h6>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12  py-1">
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
                <div className="col-lg-2 col-md-6 py-1">
                  <select className="form-select borad">
                    <option selected="">Type</option>
                    <option>Earned Leave</option>
                    <option>Casual Leave</option>
                    <option>Sick Leave</option>
                    <option>Restricted Holiday</option>
                    <option>Compensatory-Off</option>
                    <option>Paternity Leave</option>
                  </select>
                </div>
                <div className="col-lg-2 col-md-6 py-1">
                  <div className="">
                    <input
                      className="form-control borad"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-9 py-1">
                  <button className="btn btn-custom mx-2">Apply</button>
                  <a href="#">Cancel</a>
                </div>
              </div>
              <div className="card-body">
                <table id="contact_list" className="table align-middle mb-0">
                  <tbody>
                    <tr>
                      <td style={{ width: 190 }}>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar1.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Shubham Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div>
                          <div className="mb-0">
                            Shubham has applied for Separation.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: 190 }}>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar2.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Rohit Kumar</div>
                              <span className="text-muted">
                                Full stack developer
                              </span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Rohit has applied for Separation.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">2 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: 190 }}>
                        <a
                          href="#expense_request"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar3.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Raunak Sharma</div>
                              <span className="text-muted">Tester</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Raunak has applied for Separation.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: 190 }}>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar4.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Kevin Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Kevin has applied for Separation.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
    <div w3-include-html="include/footer.html" />
  </div>
  {/* Jquery Core Js */}
  {/* Plugin Js */}
  {/* Jquery Page Js */}
  {/* Jquery Page Js */}
</>

    );
}
export default HRAlerts;