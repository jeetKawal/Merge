import React from "react";
const Auto_two_step =()=>{
const design = (
<>
  {/* <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="keyword" content="" />
  <title>Mynd: 2-step verification</title>
  <link rel="icon" href="favicon.ico" alt="Mynd" /> 
  <link rel="stylesheet" href="assets/css/luno.style.min.css" />
  <link rel="stylesheet" href="assets/css/custom.css" /> */}
  {/* start: body area */}
  <div className="wrapper">
    {/* start: page body */}
    <div className="page-body auth px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
              <img
                alt="Login V2"
                className="img-fluid login-img"
                src="assets/images/dashboard/login-v2.svg"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div
              className="card shadow-sm w-100 p-4 p-md-5"
              style={{ maxWidth: "32rem" }}
            >
              {/* Form */}
              <form className="row g-3">
                <div className="mb-4 ">
                  <a
                    href="#"
                    className="brand-icon align-items-center text-primary"
                  >
                    <img
                      src="assets/images/logo/logo.png"
                      alt="Mynd"
                      style={{ height: 70 }}
                    />
                  </a>
                </div>
                <h1>2-step Verification</h1>
                <span className="text-muted">
                  We sent a verification code to your phone number. Enter the
                  code in the field below.
                </span>
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
                <div className="col-12 text-center mt-4">
                  <a
                    href="/login"
                    title=""
                    className="btn btn-sm btn-block btn-primary lift"
                  >
                    Verify my account
                  </a>
                </div>
                <div className="col-12 text-center mt-4">
                  <span className="text-muted">
                    Haven't received it? <a href="/auto_two_step#">Resend a new code.</a>
                  </span>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>{" "}
        {/* End Row */}
      </div>
    </div>
  </div>
  {/* Jquery Core Js */}
</>

);
return design;

}
export default Auto_two_step;