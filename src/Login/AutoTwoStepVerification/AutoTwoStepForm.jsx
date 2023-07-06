import React from "react";
const AutoTwoStepForm=()=>{
    const design=(
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
    );
    return design;
}
export default AutoTwoStepForm;