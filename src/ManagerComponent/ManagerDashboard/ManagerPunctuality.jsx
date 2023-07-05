import React from "react";
const ManagerPunctuality=()=>{
const design = (
    <>
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
    </>
);
return design;
}
export default ManagerPunctuality;