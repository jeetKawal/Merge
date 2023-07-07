import React from "react";
const ProceedRequest=()=>{
    const design=(
<>
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
</>
    );
return design;
}
export default ProceedRequest;