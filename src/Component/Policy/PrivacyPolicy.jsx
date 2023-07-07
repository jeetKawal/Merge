import React from "react";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar"
import Header from "../Headers/Header";
const PrivacyPolicy=()=>{
const design =(
    <>
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="keyword" content="" />
  <title>:: HRIS :: Leaves</title>
  <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Favicon*/}
  {/* plugin css file  */}
  <link rel="stylesheet" href="assets/css/daterangepicker.min.css" />
  <link rel="stylesheet" href="assets/css/dataTables.min.css" />
  {/* project css file  */}
  <link rel="stylesheet" href="assets/css/luno.style.min.css" />
  <link rel="stylesheet" href="assets/css/custom.css" />
  {/* start: sidebar */}
  <div>
    <SideBar/>
    </div>
  {/* start: body area */}
  <div className="wrapper" style={{ overflowY: "scroll" }}>
    {/* start: page header */}
    {/* <div w3-include-html="include/header.html"></div> */}
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
            <Header/>
            </div>
        </nav>
      </div>
    </header>
    {/* start: page toolbar */}
    <div className="page-toolbar px-xl-4 px-sm-2 px-0 py-3">
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
                Privacy Policy
              </li>
            </ol>
          </div>
        </div>{" "}
        {/* .row end */}
      </div>
    </div>
    {/* start: page body */}
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 pb-2">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12">
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="social_activity"
                role="tabpanel"
              >
                <div>
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title m-0">
                        Privacy Policy
                        <br />
                      </h3>
                      <h6>Last updated on 24 March 2022</h6>
                    </div>
                    <div className="card-body pt-1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu enim elit lacus, lectus quis. Interdum risus viverra
                        lectus in turpis vitae. Amet ac vestibulum donec
                        convallis tincidunt. Fringilla facilisis commodo viverra
                        proin. Et tristique risus tortor amet, sed auctor id
                        volutpat, in. Dapibus convallis cursus vel duis etiam
                        quisque ornare sagittis cursus. Malesuada nam pretium in
                        adipiscing facilisis at. Tempor dui nisi, mi enim. Arcu,
                        quis vitae donec nunc vel ullamcorper ac. Eget in lorem
                        eleifend sit.
                      </p>
                      <h3 className="pt-2">Credentials</h3>
                      <p>
                        Erat gravida eget tristique id est quis. Nunc rhoncus,
                        enim non porta. Dis aliquet sem massa vel elementum. Ut
                        tristique tellus egestas aliquam cras integer cursus
                        lectus nunc. Est, amet enim, vitae hendrerit lacus
                        pharetra, pulvinar porttitor massa. Aliquet ac pulvinar
                        risus massa at.{" "}
                        <strong>
                          Viverra quam aenean cursus adipiscing vitae in
                          consequat
                        </strong>
                        , donec lacus. Sapien cursus morbi viverra quisque
                        habitant. Est vitae scelerisque adipiscing netus integer
                        aliquam. Ipsum, in fringilla adipiscing eros, bibendum
                        ante dignissim sollicitudin consequat.
                      </p>
                      <h3 className="pt-2">
                        The information we collect and how we use it
                      </h3>
                      <p>
                        Eleifend dolor fermentum sed pretium a tortor varius
                        amet. Sed gravida scelerisque dolor facilisi amet. Sed
                        nullam enim est sit risus. Hac enim imperdiet imperdiet
                        adipiscing at dictumst leo vestibulum. Arcu est
                        malesuada aliquam fringilla aliquam a.{" "}
                        <strong>In quam adipiscing fusce amet</strong> natoque
                        purus fermentum. Sit dictumst dignissim facilisi eget
                        lobortis morbi mi diam. Urna, eget mauris faucibus
                        viverra vitae, ornare enim sit. Suspendisse urna dolor
                        id aliquam nunc.
                      </p>
                      <ul type="disc" className="pt-2">
                        <li>
                          Your Personal Information("PI") - Personal Information
                          is the information that can be associated with a
                          specific person and could be used to identify that
                          specific person whether from that data, or from the
                          data and other information that we have, or is likely
                          to have access to. We do not consider personal
                          information to include information that has been made
                          anonymous or aggregated so that it can no longer be
                          used to identify a specific person, whether in
                          combination with other information or otherwise.
                        </li>
                        <li>
                          Information about your internet connection, the
                          equipment you use to access our Services and your
                          usage details.
                        </li>
                      </ul>
                      We collect this information:
                      <ul type="disc" className="pt-2">
                        <li>
                          directly from you when you provide it to us; and/or
                        </li>
                        <li>
                          automatically as you navigate through our Services
                          (information collected automatically may include usage
                          details, IP addresses and information collected
                          through cookies, web beacons and other tracking
                          technologies).
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
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
export default PrivacyPolicy;