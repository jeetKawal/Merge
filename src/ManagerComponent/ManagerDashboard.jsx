import Footer from "../Component/Footer/Footer";
import Header from "../Component/Headers/Header";
const ManagerDashboard=()=>{
    const design= (
        <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="keyword" content="" />
  <title>:: HRIS :: Dashboard</title>
  <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Favicon*/}
  {/* plugin css file  */}
  <link rel="stylesheet" href="assets/css/daterangepicker.min.css" />
  <link rel="stylesheet" href="assets/css/dataTables.min.css" />
  {/* project css file  */}
  <link rel="stylesheet" href="assets/css/luno.style.min.css" />
  <link rel="stylesheet" href="assets/css/custom.css" />
  {/* start: sidebar */}
  <div w3-include-html="include/mngr_sidebar.html" />
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
          <div w3-include-html={<Header/>} />
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
              <li className="breadcrumb-item">
                <a className="text-secondary" href="dashboard.html">
                  Dashboard
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                My Dashboard
              </li>
            </ol>
          </div>
        </div>{" "}
        {/* .row end */}
        <div className="row align-items-center">
          <div className="col">
            <h1 className="fs-5 color-900 mt-1 mb-0">Welcome, Mark Anthony!</h1>
          </div>
        </div>{" "}
        {/* .row end */}
      </div>
    </div>
    {/* start: page body */}
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-3">
      <div className="container-fluid">
        <div className="row g-3 mb-3 row-deck">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card overflow-hidden">
              <a href="/managerleave">
                <div className="card-body">
                  <i className="fa fa-calendar-o fa-lg position-absolute top-0 end-0 p-3 text-primary" />
                  <div className="mb-2 text-uppercase">LEAVES</div>
                  <div>
                    <span className="h4">3</span>
                  </div>
                  <small className="text-muted">Taken</small>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card overflow-hidden">
              <a href="/managerattendance">
                <div className="card-body">
                  <i className="fa fa-clock-o fa-lg position-absolute top-0 end-0 p-3 text-secondary" />
                  <div className="mb-2 text-uppercase">ATTENDANCE</div>
                  <div>
                    <span className="h4">2</span>
                  </div>
                  <small className="text-muted">Missing</small>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card overflow-hidden">
              <a href="managerexpense">
                <div className="card-body">
                  <i className="fa fa-money fa-lg position-absolute top-0 end-0 p-3 text-yellow" />
                  <div className="mb-2 text-uppercase">EXPENSES</div>
                  <div>
                    <span className="h4">₹ 2000</span>
                  </div>
                  <small className="text-muted">Available balance</small>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card overflow-hidden">
              <a href="/manageralert">
                <div className="card-body">
                  <i className="fa fa-bell-o fa-lg position-absolute top-0 end-0 p-3 text-info" />
                  <div className="mb-2 text-uppercase">ALERTS</div>
                  <div>
                    <span className="h4">5</span>
                  </div>
                  <small className="text-muted">New</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row g-3 mb-3 row-deck">
          <div className="col-lg-8 col-md-12">
            <div className="card">
              <div className="card-header">
                <div>
                  <h6 className="card-title mb-0">Punctuality</h6>
                  <small className="text-muted">
                    Or you can <a href="#">sync data to Dashboard</a> to ensure
                    your data is always up-to-date.
                  </small>
                </div>
                <div className="dropdown morphing scale-left">
                  <a
                    href="#"
                    className="card-fullscreen"
                    data-bs-toggle="tooltip"
                    title="Card Full-Screen"
                  >
                    <i className="icon-size-fullscreen" />
                  </a>
                  <span>
                    <a href="/managerattendance">
                      Details <i className="fa fa-angle-right ms-1" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="d-flex flex-row flex-wrap">
                  <div className="card py-2 px-3 me-2 mt-2">
                    <small className="text-uppercase text-muted">
                      <i className="fa fa-square me-1 chart-text-color6" />
                      Present
                    </small>
                    <div>
                      <span className="fs-4 fw-bold">24</span>{" "}
                      <span className="text-success fa fa-level-up">43%</span>
                    </div>
                    {/* <div class="text-muted small">30.0 Total Target</div> */}
                  </div>
                  <div className="card py-2 px-3 me-2 mt-2">
                    <small className="text-uppercase text-muted">
                      <i className="fa fa-square me-1 chart-text-color10" />
                      Absent
                    </small>
                    <div>
                      <span className="fs-4 fw-bold">10</span>{" "}
                      <span className="text-danger fa fa-level-down">17%</span>
                    </div>
                    {/* <div class="text-muted small">5.0 Over</div> */}
                  </div>
                  <div className="card py-2 px-3 me-2 mt-2">
                    <small className="text-uppercase text-muted">
                      <i className="fa fa-square me-1 chart-text-color8" />
                      Late
                    </small>
                    <div>
                      <span className="fs-4 fw-bold">10</span>{" "}
                      <span className="text-danger fa fa-level-down">17%</span>
                    </div>
                    {/* <div class="text-muted small">5.0 Over</div> */}
                  </div>
                </div>
                <div id="apex_c_5" />
              </div>
            </div>{" "}
            {/* .card end */}
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title m-0">Expenses</h6>
                <div className="dropdown morphing scale-left">
                  <a
                    href="#"
                    className="card-fullscreen"
                    data-bs-toggle="tooltip"
                    title="Card Full-Screen"
                  >
                    <i className="icon-size-fullscreen" />
                  </a>
                  <span>
                    <a href="/managerexpense">
                      Details <i className="fa fa-angle-right ms-1" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="bg-light p-4 d-flex flex-wrap text-center">
                <div className="px-2 flex-fill">
                  <span className="text-muted small">Approved</span>
                  <h5 className="mb-0">₹ 500</h5>
                </div>
                <div className="px-2 flex-fill">
                  <span className="text-muted small">Pending</span>
                  <h5 className="mb-0">₹ 50</h5>
                </div>
                <div className="px-2 flex-fill">
                  <span className="text-muted small">Maximum</span>
                  <h5 className="mb-0">₹ 300</h5>
                </div>
              </div>
              <div className="card-body">
                <div id="apex-Tickets" />
              </div>
            </div>{" "}
            {/* .card end */}
          </div>
        </div>
        <div className="row g-3 mb-3 row-deck">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
            <div className="card" style={{ height: 370 }}>
              <div className="card-header pb-3">
                <h6 className="card-title m-0">Leaves</h6>
                <div className="dropdown morphing scale-left">
                  <a
                    href="#"
                    className="card-fullscreen"
                    data-bs-toggle="tooltip"
                    title="Card Full-Screen"
                  >
                    <i className="icon-size-fullscreen" />
                  </a>
                  <span>
                    <a href="/managerleave">
                      Details <i className="fa fa-angle-right ms-1" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="card-body custom_scroll pt-2">
                <div>
                  <span className="text-muted d-block">This month</span>
                  <h4>10.5</h4>
                </div>
                <ul className="list-unstyled" style={{ height: 100 }}>
                  <li className="mb-3 mt-3">
                    <div className="card col mb-2">
                      <div className="card border-0 alert-success alert mb-0">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/xs/avatar2.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="h6 mb-0 ">
                              <label className=" d-flex justify-content-between ">
                                Sahil Jain
                                <span>14 May</span>
                              </label>
                            </div>
                            <div className=" mb-0 ">
                              <label className="d-flex justify-content-between text-muted">
                                Software Developer Trainee
                                {/* <span class="text-muted">5 Feb - 8 Feb</span> */}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="card col mb-2">
                      <div className="card border-0 alert-success alert mb-0">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/xs/avatar1.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="h6 mb-0 ">
                              <label className=" d-flex justify-content-between ">
                                Raunak Sharma
                                <span>5 May</span>
                              </label>
                            </div>
                            <div className=" mb-0 ">
                              <label className="d-flex justify-content-between text-muted">
                                React Developer
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="card col mb-2">
                      <div className="card border-0 alert-success alert mb-0">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/xs/avatar6.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="h6 mb-0 ">
                              <label className=" d-flex justify-content-between ">
                                Shefali Jain
                                <span>15 May</span>
                              </label>
                            </div>
                            <div className=" mb-0 ">
                              <label className="d-flex justify-content-between text-muted">
                                Junior UI/UX Designer
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="card col mb-2">
                      <div className="card border-0 alert-success alert mb-0">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/xs/avatar2.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="h6 mb-0 ">
                              <label className=" d-flex justify-content-between ">
                                Rony Roy
                                <span>18 May</span>
                              </label>
                            </div>
                            <div className=" mb-0 ">
                              <label className="d-flex justify-content-between text-muted">
                                Product Manager
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="card col mb-2">
                      <div className="card border-0 alert-success alert mb-0">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/xs/avatar4.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="h6 mb-0 ">
                              <label className=" d-flex justify-content-between ">
                                Rohit Kumar
                                <span>11 May</span>
                              </label>
                            </div>
                            <div className=" mb-0 ">
                              <label className="d-flex justify-content-between text-muted">
                                Java Developer
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="card col mb-2">
                      <div className="card border-0 alert-success alert mb-0">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/xs/avatar3.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="h6 mb-0 ">
                              <label className=" d-flex justify-content-between ">
                                Aditya Kumar
                                <span>18 May</span>
                              </label>
                            </div>
                            <div className=" mb-0 ">
                              <label className="d-flex justify-content-between text-muted">
                                .NET Developer
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="card col mb-2">
                      <div className="card border-0 alert-success alert mb-0">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/xs/avatar1.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="h6 mb-0 ">
                              <label className=" d-flex justify-content-between ">
                                Mansi Ahuja
                                <span>18 May</span>
                              </label>
                            </div>
                            <div className=" mb-0 ">
                              <label className="d-flex justify-content-between text-muted">
                                Software Developer
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* .card end */}
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
            <div className="card" style={{ height: 370 }}>
              <div className="card-header pb-3">
                <h6 className="card-title m-0">Leaves Status</h6>
                <div className="dropdown morphing scale-left">
                  <a
                    href="#"
                    className="card-fullscreen"
                    data-bs-toggle="tooltip"
                    title="Card Full-Screen"
                  >
                    <i className="icon-size-fullscreen" />
                  </a>
                  <span>
                    <a href="managerleave">
                      Details <i className="fa fa-angle-right ms-1" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="card-body custom_scroll pt-2">
                <div className="card col mb-2">
                  <div className="card border-0 alert-success alert mb-0">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/xs/avatar1.jpg"
                        className="rounded-circle avatar"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <div className="h6 mb-0 ">
                          <label className=" d-flex justify-content-between ">
                            Mansi Ahuja
                            <span>3.5 days</span>
                          </label>
                        </div>
                        <div className=" mb-0 ">
                          <label className="d-flex justify-content-between">
                            <span className="text-success">Approved</span>
                            <span className="text-muted">5 Feb - 8 Feb</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card col mb-2">
                  <div className="card border-0 alert-success alert mb-0">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/xs/avatar2.jpg"
                        className="rounded-circle avatar"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <div className="h6 mb-0 ">
                          <label className=" d-flex justify-content-between ">
                            Shiva Shukla
                            <span>5 days</span>
                          </label>
                        </div>
                        <div className=" mb-0 ">
                          <label className="d-flex justify-content-between">
                            <span className="text-danger">Rejected</span>
                            <span className="text-muted">10 Jan - 14 Jan</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card col mb-2">
                  <div className="card border-0 alert-success alert mb-0">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/xs/avatar3.jpg"
                        className="rounded-circle avatar"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <div className="h6 mb-0 ">
                          <label className=" d-flex justify-content-between ">
                            Himanshu Goyal
                            <span>5 days</span>
                          </label>
                        </div>
                        <div className=" mb-0 ">
                          <label className="d-flex justify-content-between">
                            <span className="text-warning">Pending</span>
                            <span className="text-muted">10 Jan - 14 Jan</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* .card end */}
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
            <div className="card" style={{ height: 370 }}>
              <div className="card-header pb-3">
                <h6 className="card-title m-0">Alerts</h6>
                <div className="dropdown morphing scale-left">
                  <a
                    href="#"
                    className="card-fullscreen"
                    data-bs-toggle="tooltip"
                    title="Card Full-Screen"
                  >
                    <i className="icon-size-fullscreen" />
                  </a>
                  <span>
                    <a href="manageralert">
                      Details <i className="fa fa-angle-right ms-1" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="tab-content card-body custom_scroll pt-2">
                <div className="tab-pane fade show active" role="tabpanel">
                  <ul className="list-unstyled list mb-0">
                    <li className="py-2 mb-1 border-bottom">
                      <a href="#" className="d-flex">
                        <div className="avatar rounded-circle no-thumbnail">
                          <i className="fa fa-calendar fa-lg" />
                        </div>
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0">
                            <span>Calendar</span>
                            <small>1HR</small>
                          </p>
                          <span>There's an upcoming holiday in 2 days.</span>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="#" className="d-flex">
                        <div className="avatar rounded-circle no-thumbnail">
                          <i className="fa fa-calendar-o fa-lg" />
                        </div>
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0">
                            <span>Leaves</span>
                            <small>1DAY</small>
                          </p>
                          <span>You have pending attendance requests.</span>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="#" className="d-flex">
                        <div className="avatar rounded-circle no-thumbnail">
                          <i className="fa fa-clock-o fa-lg" />
                        </div>
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0">
                            <span>Attendance</span> <small>1DAY</small>
                          </p>
                          <span>You have pending attendance requests.</span>
                        </div>
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="#" className="d-flex">
                        <div className="avatar rounded-circle no-thumbnail">
                          <i className="fa fa-sign-out fa-lg" />
                        </div>
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0">
                            <span>Separation</span> <small>1HR</small>
                          </p>
                          <span>You have pending separation requests.</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
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