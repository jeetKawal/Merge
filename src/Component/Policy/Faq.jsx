import React from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Headers/Header";
import Footer from "../Footer/Footer";
const Faq=()=>{
    const design =(
        <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="keyword" content="" />
  <title>:: HRIS :: FAQs</title>
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
    <div className="page-toolbar px-xl-4 px-sm-2 px-0 mt-3">
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
                FAQ
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* start: page body */}
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-3">
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div id="accordionExample">
              <div className="card mb-1">
                <h6
                  className="mb-0 p-xl-4 p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                  aria-expanded="true"
                  aria-controls="faq1"
                >
                  How to edit profile?
                </h6>
                <div id="faq1" className="collapse show">
                  <div className="card-body border-top">
                    <p>
                      3 wolf moon officia aute, non cupidatat skateboard dolor
                      brunch.{" "}
                      <span className="text-danger">
                        Food truck quinoa nesciunt laborum eiusmod
                      </span>
                      . Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                      squid single-origin coffee nulla assumenda shoreditch et.
                      Nihil anim keffiyeh helvetica, craft beer labore wes
                      anderson cred nesciunt sapiente ea proident.
                    </p>
                    <ul>
                      <li>
                        vegan excepteur butcher vice lomo. Leggings occaecat
                        craft beer
                      </li>
                      <li>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry
                      </li>
                      <li>Brunch 3 wolf moon tempor, sunt aliqua</li>
                    </ul>
                    <p>
                      Ad vegan excepteur butcher vice lomo. Leggings occaecat
                      craft beer farm-to-table, raw denim{" "}
                      <span className="text-decoration-underline">
                        aesthetic synth nesciunt you probably
                      </span>{" "}
                      haven't heard of them accusamus labore sustainable VHS.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* .card - FAQ 1  */}
              <div className="card mb-1">
                <h6
                  className="mb-0 p-xl-4 p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                  aria-expanded="true"
                  aria-controls="faq2"
                >
                  How to change password?
                </h6>
                <div id="faq2" className="collapse">
                  <div className="card-body border-top">
                    <p>
                      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                      moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* .card - FAQ 2  */}
              <div className="card mb-1">
                <h6
                  className="mb-0 p-xl-4 p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                  aria-expanded="true"
                  aria-controls="faq3"
                >
                  How to change the profile picture?
                </h6>
                <div
                  id="faq3"
                  className="collapse"
                  aria-labelledby="heading3"
                  data-parent="#accordionExample"
                >
                  <div className="card-body border-top">
                    <p>
                      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                      moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et.
                    </p>
                    <figure>
                      <blockquote className="blockquote">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>{" "}
              {/* .card - FAQ 3  */}
              <div className="card mb-1">
                <h6
                  className="mb-0 p-xl-4 p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                  aria-expanded="true"
                  aria-controls="faq4"
                >
                  How to create requests?
                </h6>
                <div id="faq4" className="collapse">
                  <div className="card-body border-top">
                    <p>
                      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                      moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* .card - FAQ 4  */}
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
    );
    return design;
}
export default Faq;