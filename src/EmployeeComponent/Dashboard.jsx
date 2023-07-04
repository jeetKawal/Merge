import React from "react";

const Onboarding=()=>{
    return(
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
  <title>:: HRIS :: profile</title>
  <link rel="icon" href="favicon.ico" alt="Mynd" /> {/* Favicon*/}
  {/* plugin css file  */}
  <link rel="stylesheet" href="assets/css/daterangepicker.min.css" />
  <link rel="stylesheet" href="assets/css/dataTables.min.css" />
  {/* project css file  */}
  <link rel="stylesheet" href="assets/css/luno.style.min.css" />
  <link rel="stylesheet" href="assets/css/custom.css" />
  {/* start: sidebar */}
  <div w3-include-html="include/sidebar.html" />
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
          {/* <div class="header-left flex-grow-1"> */}
          <div w3-include-html="include/header.html" />
          {/* </div> */}
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
                My Profile
              </li>
            </ol>
          </div>
        </div>{" "}
        {/* .row end */}
        {/* .row end */}
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="media-body m-0 mt-4 text-md-start">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <img
                    src="assets/images/xs/avatar4.jpg"
                    className="rounded-circle avatar"
                    alt=""
                  />
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="h4 mb-0 ">
                      <label className=" d-flex justify-content-between ">
                        Mansi Ahuja
                      </label>
                    </div>
                    <div className=" mb-0 ">
                      <label
                        className="justify-content-between"
                        style={{ marginRight: 30 }}
                      >
                        <i className="fa fa-envelope mx-2 text-muted" /> -
                      </label>
                      <label className="justify-content-between">
                        <i className="fa fa-phone text-muted" /> -
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
            <div className="p-2 me-md-3">
              <div>
                <span className="h6 mb-0">- </span>{" "}
                <small className="text-secondary">
                  <i className="fa fa-clock-0" />
                </small>
              </div>
              <small className="text-muted text-uppercase">
                Date of Joining
              </small>
            </div>
            <div className="p-2 me-md-3">
              <div>
                <span className="h6 mb-0">-</span>{" "}
                <small className="text-secondary"> </small>
              </div>
              <small className="text-muted text-uppercase">Experience</small>
            </div>
            <div className="p-2 pe-lg-0">
              <div>
                <span className="h6 mb-0">-</span>{" "}
                <small className="text-secondary"> </small>
              </div>
              <small className="text-muted text-uppercase">Location</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* start: page body */}
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
      <div className="container-fluid">
        <div className="col-md-12">
          <div className="card">
            {/* Nav tabs */}
            <ul className="nav nav-tabs tab-card pt-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#personal"
                >
                  Personal
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#family_details"
                >
                  Family Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#education_details"
                >
                  Education Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#previous_emp"
                  role="tab"
                >
                  Previous Employment
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#job_org"
                  role="tab"
                >
                  Official
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#bank_acc"
                  role="tab"
                >
                  Bank Accounts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#documents">
                  Documents
                </a>
              </li>
            </ul>
            <div className="card-body">
              {/* Tab panes */}
              <div className="tab-content mt-3">
                {/* Tab: Personal Details*/}
                <div
                  role="tabpanel"
                  className="tab-pane in active"
                  id="personal"
                >
                  <div className="row">
                    <div className="col-lg-7 col-7">
                      <div className="row">
                        <div className="card card-body doctor-detail order-1 order-md-0">
                          <h6 className="d-flex justify-content-between align-items-center">
                            Basic
                            <span>
                              <a
                                href="#"
                                className="fa fa-pencil-square-o fs-6 ms-2"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#per_bas_det"
                                title="Add"
                              />
                            </span>
                          </h6>
                          <div className="row">
                            <div className="col-lg-9">
                              <div className="row mb-3 mt-2 d-flex">
                                <div className="col-3">
                                  <small className="text-muted">
                                    Salutation
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-3">
                                  <small className="text-muted">
                                    First Name
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-3">
                                  <small className="text-muted">
                                    Middle Name
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-3">
                                  <small className="text-muted">
                                    Last Name
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                              </div>
                              <div className="row mb-3 mt-2 d-flex">
                                <div className="col-3">
                                  <small className="text-muted">
                                    Date of Birth
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-3">
                                  <small className="text-muted">
                                    Nationality
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-3">
                                  <small className="text-muted">
                                    Blood Group
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-3">
                                  <small className="text-muted">Gender</small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <a href="#" className="d-block ">
                                <img
                                  src="assets/images/lg/avatar4.jpg"
                                  className=" rounded avtar_md"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row py-3 mt-2">
                        <div className="card card-body">
                          <h6 className="d-flex justify-content-between align-items-center">
                            Language known
                            <span>
                              <a
                                href="#"
                                className="fa fa-pencil-square-o fs-6"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#per_lang_det"
                                title="Add"
                              />
                            </span>
                          </h6>
                          <div className="table-responsive pt-3">
                            <table className="table align-middle mb-0 card-table">
                              <thead>
                                <tr>
                                  <th
                                    className="border-top-0 sorting"
                                    style={{ textAlign: "center" }}
                                  >
                                    Language
                                  </th>
                                  <th
                                    className="border-top-0 sorting"
                                    style={{ textAlign: "center" }}
                                  >
                                    Reading
                                  </th>
                                  <th
                                    className="border-top-0 sorting"
                                    style={{ textAlign: "center" }}
                                  >
                                    Writing
                                  </th>
                                  <th
                                    className="border-top-0 sorting"
                                    style={{ textAlign: "center" }}
                                  >
                                    Speaking
                                  </th>
                                  <th
                                    className="border-top-0 sorting"
                                    style={{ textAlign: "center" }}
                                  >
                                    Native
                                  </th>
                                  <th
                                    className="border-top-0 sorting"
                                    style={{ textAlign: "center" }}
                                  >
                                    Work
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ textAlign: "center" }}>-</td>
                                  <td style={{ textAlign: "center" }}>-</td>
                                  <td style={{ textAlign: "center" }}>-</td>
                                  <td style={{ textAlign: "center" }}>-</td>
                                  <td style={{ textAlign: "center" }}>-</td>
                                  <td style={{ textAlign: "center" }}>-</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-5">
                      <div className="card">
                        <div className="card-body pb-0">
                          <h6 className="d-flex justify-content-between align-items-center">
                            Contact Information
                            <span>
                              <a
                                href="#"
                                className="fa fa-pencil-square-o fs-6 ms-2"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#cont_det"
                                title="Add"
                              />
                            </span>
                          </h6>
                        </div>
                        <ul className="resume-box ms-3">
                          <li>
                            <div className="icon text-center">
                              <i className="fa fa-phone text-secondary" />
                            </div>
                            <div className="fw-bold mb-0">Mobile</div>
                            <span>
                              Official: <strong>-</strong>
                            </span>
                            <br />
                            <span>
                              Personal: <strong>-</strong>
                            </span>
                          </li>
                          <li>
                            <div className="icon text-center">
                              <i className="fa fa-envelope text-secondary" />
                            </div>
                            <div className="fw-bold mb-0">Email</div>
                            <span>
                              Official: <strong>-</strong>
                            </span>
                            <br />
                            <span>
                              Personal: <strong>-</strong>
                            </span>
                          </li>
                          <li>
                            <div className="icon text-center">
                              <i className="fa fa-building text-secondary" />
                            </div>
                            <div className="fw-bold mb-0">Current Address</div>
                            <span>-</span>
                          </li>
                          <li>
                            <div className="icon text-center">
                              <i className="fa fa-building text-secondary" />
                            </div>
                            <div className="fw-bold mb-0">
                              Permanent Address
                            </div>
                            <span>-</span>
                          </li>
                          <li>
                            <div className="icon text-center">
                              <i className="fa fa-user text-secondary" />
                            </div>
                            <div className="fw-bold mb-0">Emergency Number</div>
                            <span>
                              -<br />-
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab: Family Details */}
                <div role="tabpanel" className="tab-pane" id="family_details">
                  <div className="card-header p-0 pb-2">
                    <h6 className="">Family</h6>
                    <div>
                      <button
                        className="btn btn-outline-pink py-1"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#famper_det"
                      >
                        <i className="fa fa-plus" /> Add
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className=" mb-3">
                      <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 row-deck">
                        <div className="col  mb-1">
                          <div className="card" style={{ height: 340 }}>
                            <div className="file-input scale-left position-absolute top-0 end-0 mt-3 me-3">
                              <a
                                href="#"
                                className="fa fa-pencil-square-o fs-6 ms-2"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#famper_det"
                                title="Edit Contacts"
                              />
                            </div>
                            <a
                              href="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#famper_det_view"
                              data-bs-placement="top"
                            >
                              <div className="text-center overflow-hidden">
                                <div className="card-body pt-4 pb-2">
                                  <img
                                    src="assets/images/lg/avatar2.jpg"
                                    alt="Avatar"
                                    className="rounded-circle avatar xl img-thumbnail"
                                  />
                                </div>
                              </div>
                              <div className="card-body row g-3 col">
                                <div className="col-5">
                                  <small className="text-muted">Name</small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-7">
                                  <small className="text-muted">Relation</small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-5">
                                  <small className="text-muted">
                                    Date of Birth
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-7">
                                  <small className="text-muted">
                                    Dependent
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-5">
                                  <small className="text-muted">
                                    Identification
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-7">
                                  <small className="text-muted">
                                    Identification Number
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab: Education Details */}
                <div
                  role="tabpanel"
                  className="tab-pane"
                  id="education_details"
                >
                  <div className="row pb-2">
                    <div className="col-md-12 ">
                      <div className="card-header p-0 pb-2">
                        <h6 className="">Education</h6>
                        <div>
                          <button
                            className="btn btn-outline-pink py-1"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#educ_det"
                          >
                            <i className="fa fa-plus" />
                            Add
                          </button>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table  align-middle mb-0 card-table">
                          <thead>
                            <tr>
                              <th className="border-top-0 sorting">
                                Board/University
                              </th>
                              <th className="border-top-0 sorting">
                                School/Institute
                              </th>
                              <th className="border-top-0 sorting">
                                Qualification
                              </th>
                              <th className="border-top-0 sorting">
                                Specialization
                              </th>
                              <th className="border-top-0 sorting">From</th>
                              <th className="border-top-0 sorting">To</th>
                              <th className="border-top-0 sorting">
                                Marks obtained
                              </th>
                              <th className="border-top-0 sorting">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a
                                  href="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#educ_view_det"
                                  title="View"
                                >
                                  -
                                </a>
                              </td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>
                                <a
                                  href="#"
                                  className="fa fa-pencil-square-o fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#educ1_det"
                                  title="Edit"
                                />
                                <a
                                  href="#"
                                  className="fa fa-download fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#"
                                  title="Download"
                                />
                                <a
                                  href="#"
                                  className="fa fa-eye fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#"
                                  title="View"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <hr className="devider" />
                  <div className="row ">
                    <div className="col-md-12 ">
                      <div className="card-header p-0 pb-2">
                        <h6 className="">Certificates</h6>
                        {/* widgest: Card more action icon */}
                        <div>
                          <button
                            className="btn btn-outline-pink py-1"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#certi_det"
                          >
                            <i className="fa fa-plus" />
                            Add
                          </button>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table align-middle mb-0 card-table">
                          <thead>
                            <tr>
                              <th className="border-top-0 sorting">
                                Name of Certification
                              </th>
                              <th className="border-top-0 sorting">
                                Issuing Authority
                              </th>
                              <th className="border-top-0 sorting">Level</th>
                              <th className="border-top-0 sorting">
                                Certification ID
                              </th>
                              <th className="border-top-0 sorting">
                                Year of Completion
                              </th>
                              <th className="border-top-0 sorting">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>
                                <a
                                  href="#"
                                  className="fa fa-pencil-square-o fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#certi1_det"
                                  title="Edit"
                                />
                                <a
                                  href="#"
                                  className="fa fa-download fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#"
                                  title="Download"
                                />
                                <a
                                  href="#"
                                  className="fa fa-eye fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#"
                                  title="View"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab: Previous Employer details */}
                <div
                  className="tab-pane fade"
                  id="previous_emp"
                  role="tabpanel"
                >
                  <div className="row-title justify-content-between mb-1 pb-2">
                    <h6 className="">Previous Employment</h6>
                    <div>
                      <button
                        className="btn btn-outline-pink py-1"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#prev_det"
                      >
                        <i className="fa fa-plus" /> Add
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <table className="table align-middle mb-0 card-table">
                        <thead>
                          <tr>
                            <th>Company</th>
                            <th>Designation</th>
                            <th>Employer Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Employment Type</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a
                                href="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#prev1_det"
                                title="Edit"
                              >
                                -
                              </a>
                            </td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <a
                                href="#"
                                className="fa fa-pencil-square-o fs-6 ms-2"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#prev_det"
                                title="Edit"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>{" "}
                  {/* Row end  */}
                </div>
                {/* Tab: Official Details */}
                <div className="tab-pane fade" id="job_org" role="tabpanel">
                  <div className="row-title justify-content-between mb-1 pb-2">
                    <h6>
                      Official Details
                      {/* <a href="#" class="fa fa-pencil-square-o fs-6 ms-2" data-bs-toggle="offcanvas" data-bs-target="#official_det" title="Edit Contacts"></a> */}
                    </h6>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="card-title mb-0">Basic</h6>
                          <div className="">
                            <a
                              href="#"
                              className="fa fa-pencil-square-o fs-6 ms-2"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#official_bas_det"
                              title="Edit"
                            />
                          </div>
                        </div>
                        <div className="card-body g-3">
                          <div className="row g-3 d-flex">
                            <div className="col-3">
                              <small className="text-muted">Employee ID</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-3">
                              <small className="text-muted">Type</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-3">
                              <small className="text-muted">Status</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-3">
                              <small className="text-muted">
                                Date of Joining
                              </small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-3">
                              <small className="text-muted">
                                Work Location
                              </small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-3">
                              <small className="text-muted">Payroll Area</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-3">
                              <small className="text-muted">Grade</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-3">
                              <small className="text-muted">Position</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            {/* <div class="col-3">
                                                      <small class="text-muted">Job</small>
                                                      <div class="mb-0 fw-bold">-</div>
                                                  </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card" style={{ minHeight: 239 }}>
                        <div className="card-header">
                          <h6 className="card-title mb-0">Benefit Accounts</h6>
                          <div className="">
                            <a
                              href="#"
                              className="fa fa-pencil-square-o fs-6 ms-2"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#official_ba_det"
                              title="Edit"
                            />
                          </div>
                        </div>
                        <div className="card-body g-3">
                          <div className="row g-3 d-flex">
                            <div className="col-4">
                              <small className="text-muted">
                                Provident Fund ID
                              </small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4">
                              <small className="text-muted">
                                Previous Provident Fund ID
                              </small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4">
                              <small className="text-muted">ESIC Number</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4">
                              <small className="text-muted">Mediclaim ID</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4">
                              <small className="text-muted">Pension</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4">
                              <small className="text-muted">Gratuity</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card" style={{ height: 250 }}>
                        <div className="card-header">
                          <h6 className="card-title mb-0">Organization</h6>
                          <div className="">
                            <a
                              href="#"
                              className="fa fa-pencil-square-o fs-6 ms-2"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#official_org_det"
                              title="Edit"
                            />
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row g-3 d-flex">
                            <div className="col-4">
                              <small className="text-muted">Head Company</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4">
                              <small className="text-muted">Company Name</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4">
                              <small className="text-muted">Location</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4">
                              <small className="text-muted">
                                Line of business
                              </small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4">
                              <small className="text-muted">
                                Business Area
                              </small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="card-title mb-0">Managers</h6>
                          <div className="">
                            <a
                              href="#"
                              className="fa fa-pencil-square-o fs-6 ms-2"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#official_mngr_det"
                              title="Edit"
                            />
                          </div>
                        </div>
                        <div className="card-body g-3">
                          <div className="row g-3 d-flex">
                            <div className="col-4 ">
                              <small className="text-muted">L1</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4 ">
                              <small className="text-muted">L2</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <div className="col-4 ">
                              <small className="text-muted">L3</small>
                              <div className="mb-0 fw-bold">-</div>
                            </div>
                            <h6 className="card-title mt-3">Subordinates</h6>
                            <div className="col-12 ">
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-sm"
                                data-bs-dismiss="offcanvas"
                              >
                                Organization chart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab: Bank account Details */}
                <div className="tab-pane fade" id="bank_acc" role="tabpanel">
                  <div className="row-title justify-content-between mb-1">
                    <h6>Bank Account Details</h6>
                    <div>
                      <button
                        className="btn btn-outline-pink py-1"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#add_acc"
                      >
                        <i className="fa fa-plus" /> Add
                      </button>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className=" mb-3">
                        <div className="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-lg-3 row-cols-sm-1 row-cols-1 g-3 row-deck">
                          <div className="col  mb-1">
                            <div className="card" style={{ height: 250 }}>
                              <div className="file-input scale-left position-absolute top-0 end-0 mt-3 me-3">
                                <a
                                  href="#"
                                  className="fa fa-pencil-square-o fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#add_acc"
                                  title="Edit Contacts"
                                />
                              </div>
                              <div className="card-body mt-2 row g-3">
                                <div className="col-6">
                                  <small className="text-muted">Name</small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-6">
                                  <small className="text-muted">
                                    Account Holder Name
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-6">
                                  <small className="text-muted">
                                    Account Number
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-6">
                                  <small className="text-muted">
                                    Account Type
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                                <div className="col-6">
                                  <small className="text-muted">
                                    IFSC Code
                                  </small>
                                  <div className="mb-0 fw-bold">-</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab: Document Details */}
                <div className="tab-pane fade" id="documents" role="tabpanel">
                  <div className="row-title justify-content-between mb-1 pb-2">
                    <h6 className="">Documents</h6>
                    <div>
                      <button
                        className="btn btn-outline-pink py-1"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#add_document"
                      >
                        <i className="fa fa-plus" /> Add
                      </button>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className=" mb-3">
                        <table className="table align-middle mb-0 card-table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Number</th>
                              <th>Date of Issue</th>
                              <th>Place of Issue</th>
                              <th>Country of Issue</th>
                              <th>Validity</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>
                                <a
                                  href="#"
                                  className="fa fa-pencil-square-o fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#edit_document"
                                  title="Edit"
                                />
                                <a
                                  href="#"
                                  className="fa fa-download fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#"
                                  title="Download"
                                />
                                <a
                                  href="#"
                                  className="fa fa-eye fs-6 ms-2"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#"
                                  title="View"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* offcanvas: personal details - basic */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="per_bas_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Edit details</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <div className="col-md-9 col-sm-8 mb-2">
                  <div
                    className="image-input avatar xxl rounded-4"
                    style={{
                      backgroundImage: "url(assets/images/lg/avatar4.jpg)"
                    }}
                  >
                    <div
                      className="avatar-wrapper rounded-4"
                      style={{
                        backgroundImage: "url(assets/images/lg/avatar4.jpg)"
                      }}
                    />
                    <div className="file-input">
                      <input
                        type="file"
                        className="form-control"
                        name="file-input"
                        id="file-input"
                      />
                      <label
                        htmlFor="file-input"
                        className="fa fa-pencil shadow text-muted"
                      />
                    </div>
                  </div>
                </div>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Salutation</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">First Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mark"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="-"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Anthony"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="+91-9887565823"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Gender*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Male"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date of birth*</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Blood group</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>Rhnull</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Nationality*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Indian"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: personal details - Language */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="per_lang_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Edit language details</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <form className="row g-3">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <a href="#">
                      <button
                        type="button"
                        className="btn btn-outline-pink btn-sm"
                        style={{ float: "right" }}
                      >
                        Add more
                      </button>
                    </a>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Language</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Spanish</option>
                      <option>German</option>
                      <option>Russian</option>
                      <option>Chinese</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input type="checkbox" id="" defaultValue="Reading" />
                    <label className="form-label" htmlFor="read">
                      Reading
                    </label>
                  </div>
                  <div className="col-md-6">
                    <input type="checkbox" id="" defaultValue="Writing" />
                    <label className="form-label" htmlFor="read">
                      Writing
                    </label>
                  </div>
                  <div className="col-md-6">
                    <input type="checkbox" id="" defaultValue="Speaking" />
                    <label className="form-label" htmlFor="read">
                      Speaking
                    </label>
                  </div>
                  <div className="col-md-6">
                    <input type="checkbox" id="" defaultValue="Native" />
                    <label className="form-label" htmlFor="read">
                      Native
                    </label>
                  </div>
                  <div className="col-md-6">
                    <input type="checkbox" id="" defaultValue="Work" />
                    <label className="form-label" htmlFor="read">
                      Work
                    </label>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: personal details - Identification */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="per_identity_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Edit Identification details</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <form className="row g-3">
                  <div className="col-md-6 pt-2">
                    <h6>Identification</h6>
                  </div>
                  <div className="col-md-6">
                    <a href="#">
                      <button
                        type="button"
                        className="btn btn-outline-pink btn-sm"
                        style={{ float: "right" }}
                      >
                        Add more
                      </button>
                    </a>
                  </div>
                  <div className="col-md-12 mt-4">
                    <label className="form-label">Type*</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Aadhar</option>
                      <option>PAN Card</option>
                      <option>Passport</option>
                      <option>Driving License</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Document Number*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date of Issue*</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Place of Issue</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the place"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country of Issue*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the country"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Validity*</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: contact details */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="cont_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Contact details</h5>
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
                    <h5>Personal</h5>
                  </div>
                  <div className="col-md-6 mb-2">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="+91-1235466852"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="personal@gmail.com"
                    />
                  </div>
                  <div className="col-md-12">
                    <h5>Official</h5>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="+91-1235466852"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="official@gmail.com"
                    />
                  </div>
                  <div className="col-md-12">
                    <h5>Emergency</h5>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rony Anthony"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="+91-1235466852"
                    />
                  </div>
                  <div className="col-md-12 mt-5">
                    <h5>Current Address</h5>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">C/O</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="-"
                    />
                  </div>
                  <div className="col-md-8">
                    <label className="form-label">House Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="35A"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Address Line1*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Hexa street, Palace Road"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Delhi"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State/Region*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Delhi"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="India"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Zip code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={110058}
                    />
                  </div>
                  <div className="col-md-12 mt-4">
                    <h5>Permanent Address</h5>
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="gridCheck1"
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      Permanent address same as current address
                    </label>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">C/O</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="-"
                    />
                  </div>
                  <div className="col-md-8">
                    <label className="form-label">House Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="35A"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Address Line1*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Hexa street, Palace Road"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Delhi"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State/Region*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Delhi"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="India"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Zip code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={110058}
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: family personal details */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="famper_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Add Family member</h5>
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
                    <a href="#">
                      <button
                        type="button"
                        className="btn btn-outline-pink btn-sm"
                        style={{ float: "right" }}
                      >
                        Add more
                      </button>
                    </a>
                  </div>
                  <div className="col-md-9 col-sm-8 mb-2">
                    <div
                      className="image-input avatar xxl rounded-4"
                      style={{
                        backgroundImage: "url(assets/images/avatar.png)"
                      }}
                    >
                      <div
                        className="avatar-wrapper rounded-4"
                        style={{
                          backgroundImage: "url(assets/images/profile_av.png)"
                        }}
                      />
                      <div className="file-input">
                        <input
                          type="file"
                          className="form-control"
                          name="file-input"
                          id="file-input"
                        />
                        <label
                          htmlFor="file-input"
                          className="fa fa-pencil shadow text-muted"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Middle Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Relationship</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Mother</option>
                      <option>Father</option>
                      <option>Brother</option>
                      <option>Sister</option>
                      <option>Spouse</option>
                      <option>Child</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Gender
                    </label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Blood group</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>Rhnull</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Nationality</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ChrisMorise"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Occupation</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ChrisMorise"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Applicable for mediclaim
                    </label>
                    <input type="radio" name="yes_no" defaultChecked="" />
                    Yes
                    <input className="mx-2" type="radio" name="yes_no" />
                    No
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Dependent
                    </label>
                    <br />
                    <input type="radio" name="yes_no1" defaultChecked="" />
                    Yes
                    <input className="mx-2" type="radio" name="yes_no1" />
                    No
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Nominee
                    </label>
                    <br />
                    <input type="radio" name="yes_no2" defaultChecked="" />
                    Yes
                    <input className="mx-2" type="radio" name="yes_no2" />
                    No
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Is minor?
                    </label>
                    <br />
                    <input type="radio" name="yes_no3" defaultChecked="" />
                    Yes
                    <input className="mx-2" type="radio" name="yes_no3" />
                    No
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Child education allowance
                    </label>
                    <input type="radio" name="yes_no4" defaultChecked="" />
                    Yes
                    <input className="mx-2" type="radio" name="yes_no4" />
                    No
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Hostel allowance
                    </label>
                    <br />
                    <input type="radio" name="yes_no5" defaultChecked="" />
                    Yes
                    <input className="mx-2" type="radio" name="yes_no5" />
                    No
                  </div>
                  <div className="col-md-12 mt-4">
                    <h6>Identification</h6>
                    <label className="form-label" aria-required="true">
                      Document
                    </label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>PAN Card</option>
                      <option>Aadhar Card</option>
                      <option>Passport</option>
                      <option>Driving License</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">
                      Upload Identification Document
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload file"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Add member
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
            {/* offcanvas: family personal details - view */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="famper_det_view"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Family member details</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <div className="col-md-9 col-sm-8 mb-2">
                  <div
                    className="image-input avatar xxl rounded-4"
                    style={{ backgroundImage: "url(assets/images/avatar.png)" }}
                  >
                    <div
                      className="avatar-wrapper rounded-4"
                      style={{
                        backgroundImage: "url(assets/images/profile_av.png)"
                      }}
                    />
                  </div>
                </div>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="-"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Anthony"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Relationship</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Father"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Gender
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Male"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="18 Jan, 1970"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Blood group</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="B+"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Nationality</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Indian"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Occupation</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Engineer"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Applicable for mediclaim
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Yes"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Dependent
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Nominee
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" aria-required="true">
                      Is minor?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-12 mt-4">
                    <h6>Identification</h6>
                    <label className="form-label">Document</label>
                    <div className="card mb-2">
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Download file"
                      >
                        PAN Card
                        <i className="px-3 fa fa-download" />
                      </button>
                    </div>
                    <div className="card">
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Download file"
                      >
                        Aadhar Card
                        <i className="px-3 fa fa-download" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* offcanvas: Education details */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="educ_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Add education details</h5>
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
                    <a href="#">
                      <button
                        type="button"
                        className="btn btn-outline-pink btn-sm"
                        style={{ float: "right" }}
                      >
                        Add more
                      </button>
                    </a>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Board/University</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter university"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">School/Institute</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter school"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the qualification"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Specialization</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter specialization"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">From</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">To</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Marking method</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter specialization"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Marks obtained</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your marks"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Total marks</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter total marks"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the city"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the state"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the country"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Upload Document</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload file"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: Education details */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="educ1_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Edit education details</h5>
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
                    <label className="form-label">Board/University</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter university"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">School/Institute</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter school"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the qualification"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Specialization</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter specialization"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">From</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">To</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Marking method</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Marking method"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Marks obtained</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your marks"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Total marks</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter total marks"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the city"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the state"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the country"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Upload Document</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload file"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: Education details - view */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="educ_view_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Education details</h5>
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
                    <label className="form-label">Board/University</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CBSE"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">School/Institute</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="BalBharti Public School"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="12th"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Specialization</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="NeuroScience"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">From</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">To</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Marking method</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Grade point average"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Marks obtained</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="3.4"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Total marks</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={4.0}
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cambridge"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cambridge"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="United Kingdom"
                      readOnly=""
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* offcanvas: Education - certificate details - Add */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="certi_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Add certification</h5>
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
                    <a href="#">
                      <button
                        type="button"
                        className="btn btn-outline-pink btn-sm"
                        style={{ float: "right" }}
                      >
                        Add more
                      </button>
                    </a>
                  </div>
                  <div className="col-md-12 mt-4">
                    <label className="form-label">Name of certification</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name of certification"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Issuing Authority</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the issuing authority"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Level</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter level"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Certification ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter ID"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Year of completion</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Upload Document</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload file"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: Education - certificate details edit */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="certi1_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Edit certificate details</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <form className="row g-3">
                  <div className="col-md-12 mt-4">
                    <label className="form-label">Name of certification</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name of certification"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Issuing Authority</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the issuing authority"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Level</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter level"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Certification ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter ID"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Year of completion</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Upload Document</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload file"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: Previous Employment details */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="prev_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Add previous employment</h5>
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
                    <a href="#">
                      <button
                        type="button"
                        className="btn btn-outline-pink btn-sm"
                        style={{ float: "right" }}
                      >
                        Add more
                      </button>
                    </a>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Name of the company</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter company"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the designation"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Type of employer</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>MNC</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">From</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">To</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the city"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the state"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the country"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Type of Employment</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Contractual</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">CTC</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter the CTC"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Industry</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Employment type"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Reason of Leaving</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Employment type"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: Previous Employment details - Readonly */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="prev1_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Previous employment details</h5>
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
                    <label className="form-label">Name of the company</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Myntra"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jr. Software Developer"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Type of employer</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MNC"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">From</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">To</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Gurugram"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Haryana"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="India"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Type of Employment</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full-Time"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">CTC</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder={600000}
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Industry</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Information Technology"
                      readOnly=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Reason of Leaving</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Work culture wasn't very healthy and no scope of self growth"
                      readOnly=""
                      defaultValue={""}
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* offcanvas: Official details - Basic */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="official_bas_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Edit basic details</h5>
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
                    <label className="form-label">Employee ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter company"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Type of Employment</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Contractual</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Status</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Active</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date of Joining</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Work Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the location"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Payroll area</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Annual</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Grade</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the grade"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the position"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Job</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the job"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: Official details - Benefit Accounts */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="official_ba_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">
                  Edit benefit account details
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
                  <div className="col-md-12 mt-4">
                    <label className="form-label">Provident Fund</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the Amount"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">
                      Previous Provident Fund
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the previous provident fund"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">ESIC number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the ESIC number"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Mediclaim ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the mediclaim ID"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Pension ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the pension ID"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Gratuity Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the graturity Number"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: Official details - Organization */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="official_org_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Edit organization details</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <form className="row g-3">
                  <div className="col-md-12 mt-4">
                    <label className="form-label">Head of Company</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the name"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the location"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Line of business</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the line of business"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Business area</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the business area"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: Official details - Managers */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="official_mngr_det"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Edit organization details</h5>
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
                    <label className="form-label">L1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the name of L1"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">L2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the name of L2"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">L3</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the name of L3"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update Details
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
            {/* offcanvas: Bank Account details */}
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="add_acc">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Update account details</h5>
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
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ICICI"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Account Holder Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mark Anthony"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Account Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder={2566520000258223}
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Account Type</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Savings"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">IFSC Code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ICIC52658"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Update details
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
            {/* offcanvas: Add documents */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="add_document"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Add documents</h5>
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
                    <a href="#">
                      <button
                        type="button"
                        className="btn btn-outline-pink btn-sm"
                        style={{ float: "right" }}
                      >
                        Add more
                      </button>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Documents</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Aadhar</option>
                      <option>PAN Card</option>
                      <option>Policy of company</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Type</label>
                    <select className="form-select">
                      <option selected="">Choose...</option>
                      <option>Personal</option>
                      <option>Official</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Document number"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date of Issue</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Place of Issue</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the place"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country of Issue</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the country"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Validity</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Upload Document</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload file"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#onboardcomplete"
                    >
                      Upload
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
            {/* offcanvas: Edit documents */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="edit_document"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Edit documents</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Documents</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aadhar"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Type</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Personal"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Document number"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date of Issue</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Place of Issue</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the place"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country of Issue</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the country"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Validity</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Upload Document</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload file"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <button type="submit" className="btn btn-primary">
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
          </div>{" "}
          {/* .card end */}
        </div>
      </div>
    </div>
    {/* start: page footer */}
    <div w3-include-html="include/footer.html" />
  </div>
  {/* Jquery Core Js */}
  {/* Plugin Js */}
  {/* Jquery Page Js */}
  <div
    className="modal fade"
    id="welcomeonboard"
    tabIndex={-1}
    style={{ overflow: "hidden" }}
    aria-labelledby="OnboardingPopup"
    aria-hidden="true"
    role="dialog"
  >
    <div
      className="modal-dialog modal-md modal-dialog-scrollable"
      style={{ transform: "translate(0, 150px)", maxWidth: 600 }}
    >
      <div className="modal-content">
        <div className="modal-body">
          <div className="mb-4">
            <a href="#" className="brand-icon align-items-center text-primary">
              <img
                src="assets/images/logo/logo.png"
                alt="Mynd"
                style={{ height: 50 }}
              />
            </a>
          </div>
          <h2 className=" text-center">Welcome, Mark Anthony!</h2>
          <h6 className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            malesuada turpis ac metus mattis, vehicula laoreet orci volutpat.
            Morbi et nisi rhoncus, dapibus sapien viverra, sodales arcu.
            Aalesuada turpis ac metus mattis, vehicula laoreet orci volutpat
            vorbi et nisi rhoncus.
          </h6>
        </div>
        <div className="pb-4" style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="onboardcomplete"
    tabIndex={-1}
    aria-labelledby="OnboardingPopup"
    aria-hidden="true"
    role="dialog"
    style={{ zIndex: 3000 }}
  >
    <div
      className="modal-dialog modal-md modal-dialog-scrollable"
      style={{ transform: "translate(0, 100px)" }}
    >
      <div className="modal-content">
        <div className="modal-body">
          <div className="mb-2" style={{ textAlign: "center" }}>
            <div className="rounded-circle col-12 text-center display-2 py-4">
              <img src="assets/images/lg/check.svg" alt="" />
            </div>
          </div>
          <h3 className=" text-center">Onboarding done!</h3>
          <h6 className="text-center">Proceed to Dashboard.</h6>
        </div>
        <div className="pb-4" style={{ textAlign: "center" }}>
          <a
            className="btn btn-sm btn-block btn-primary lift px-2"
            href="dashboard.html"
            title=""
          >
            Proceed
          </a>
        </div>
      </div>
    </div>
  </div>
</>
</>
    );
}
export default Onboarding;