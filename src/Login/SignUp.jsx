
import React from "react"
const SignUp =()=>{
    const design = (
<>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="keyword" content="" />
  <title>Mynd: Sign up</title>
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
                <div className="col-12">
                  <div className="">
                    <label className="form-label">Enter a username</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-2">
                    <div className="form-label">
                      <span className="d-flex justify-content-between align-items-center">
                        Enter your Phone number
                      </span>
                    </div>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      placeholder="(+91) 222 55 685 22"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-2">
                    <div className="form-label">
                      <span className="d-flex justify-content-between align-items-center">
                        Enter a password
                      </span>
                    </div>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-2">
                    <div className="form-label">
                      <span className="d-flex justify-content-between align-items-center">
                        Confirm password
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-4">
                  <a
                    className="btn btn-sm btn-block btn-primary lift px-3"
                    href="auth-two-step.html"
                    title=""
                  >
                    Verify
                  </a>
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
export default SignUp;