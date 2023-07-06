import React from "react";

const PunctualityExpense=()=>{
    return(
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
                  <a href="/hr_attendance">
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
                  <a href="/hr_expense">
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
    );
}
export default PunctualityExpense;