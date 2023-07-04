import React from "react";
const ForgotPassword=()=>{
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
        <title>Mynd: Forgot password</title>
        <link rel="icon" href="favicon.ico" alt="Mynd" /> {/* Favicon*/}
        {/* project css file  */}
        <link rel="stylesheet" href="assets/css/luno.style.min.css" />
        <link rel="stylesheet" href="assets/css/custom.css" />
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
                      className="img-fluid"
                      src="assets/images/dashboard/forgot-password-v2.svg"
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
                      <div className="col-12 mb-5">
                        <div className="mb-4 ">
                          <a
                            href="#"
                            className="brand-icon d-flex align-items-center text-primary"
                          >
                            <img
                              src="assets/images/logo/logo.png"
                              alt="Mynd"
                              style={{ height: 70 }}
                            />
                          </a>
                        </div>
                        <h1 className="d-flex">Forgot password?</h1>
                        <span>
                          Enter the mobile number you used when you joined and we'll
                          send you instructions to reset your password.
                        </span>
                      </div>
                      <div className="col-12">
                        <div>
                          <label className="form-label">Mobile number</label>
                          <input
                            type="number"
                            className="form-control form-control-sm"
                            placeholder="+91-9912345678"
                          />
                        </div>
                      </div>
                      <div className="col-12 mt-4">
                        <a
                          href="auth-two-step.html"
                          title=""
                          className="btn btn-lg btn-block btn-primary lift px-3"
                        >
                          Submit
                        </a>
                      </div>
                      <div className="col-12 mt-4">
                        <span className="text-muted">
                          <a href="login.html">Back to Sign in</a>
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
        {/* Jquery Page Js */}
      </>
      
    );
    return design;
}
export default ForgotPassword;