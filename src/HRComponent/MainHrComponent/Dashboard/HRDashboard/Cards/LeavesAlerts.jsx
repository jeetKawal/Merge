import React from "react";

const LeavesAlerts=()=>{
    return(
        <div className="row g-3 mb-3 row-deck">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
          <div className="card" style={{ height: 370 }}>
            <div className="">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                  <div className="">
                    <div className="card-header pb-3">
                      <h6 className="card-title m-0">Leaves</h6>
                    </div>
                    <div className="card-body custom_scroll pt-2">
                      <ul className="list-unstyled">
                        <li className="mb-5">
                          <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>15</span>
                          </div>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: "89%" }}
                              aria-valuenow={89}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="mb-5">
                          <div className="d-flex justify-content-between">
                            <span>Approved</span>
                            <span>9</span>
                          </div>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-cyan"
                              role="progressbar"
                              style={{ width: "76%" }}
                              aria-valuenow={76}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="mb-5">
                          <div className="d-flex justify-content-between">
                            <span>Pending</span>
                            <span>6</span>
                          </div>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-teal"
                              role="progressbar"
                              style={{ width: "52%" }}
                              aria-valuenow={52}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                  {/* .card end */}
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                  <div className="" style={{ height: 337 }}>
                    <div className="card-header pb-3">
                      <h6 className="card-title m-0">Pending Approvals</h6>
                      <span>
                        <a href="/hr_leaves">
                          Details <i className="fa fa-angle-right ms-1" />
                        </a>
                      </span>
                    </div>
                    <div className="card-body custom_scroll pt-2">
                      <div className="card col mb-2">
                        <div className="card border-0 alert-success alert mb-0">
                          <a href="">
                            <div className="d-flex align-items-center">
                              <img
                                src="assets/images/xs/avatar1.jpg"
                                className="rounded-circle avatar"
                                alt=""
                              />
                              <div className="flex-fill ms-3 text-truncate">
                                <div className="h6 mb-0 ">
                                  <label className=" d-flex justify-content-between ">
                                    Mansi Ahuja
                                    <span>5 Leaves</span>
                                  </label>
                                </div>
                                <div className=" mb-0 ">
                                  <label className="d-flex justify-content-between">
                                    Manager 1
                                    {/* <span class="text-muted">5 Feb - 8 Feb</span> */}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="card col mb-2">
                        <div className="card border-0 alert-success alert mb-0">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar2.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="flex-fill ms-3 text-truncate">
                              <div className="h6 mb-0 ">
                                <label className=" d-flex justify-content-between ">
                                  Shiva Shukla
                                  <span>10 leaves</span>
                                </label>
                              </div>
                              <div className=" mb-0 ">
                                <label className="d-flex justify-content-between">
                                  Manager 2
                                  {/* <span class="text-muted">5 Feb - 8 Feb</span> */}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card col mb-2">
                        <div className="card border-0 alert-success alert mb-0">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar3.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="flex-fill ms-3 text-truncate">
                              <div className="h6 mb-0 ">
                                <label className=" d-flex justify-content-between ">
                                  Himanshu Goyal
                                  <span>4 leaves</span>
                                </label>
                              </div>
                              <div className=" mb-0 ">
                                <label className="d-flex justify-content-between">
                                  Manager 3
                                  {/* <span class="text-muted">5 Feb - 8 Feb</span> */}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* .card end */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
          <div className="card" style={{ height: 370 }}>
            <div className="card-header pb-3">
              <h6 className="card-title m-0">Alerts</h6>
              <span>
                <a href="/hr_alerts">
                  Details <i className="fa fa-angle-right ms-1" />
                </a>
              </span>
            </div>
            <div className="tab-content card-body custom_scroll pt-2">
              <div className="tab-pane fade show active" role="tabpanel">
                <ul className="list-unstyled list mb-0">
                  <li className="py-2 mb-1 border-bottom">
                    <a href="#" className="d-flex">
                      <div className="avatar rounded-circle no-thumbnail">
                        <i className="fa fa-calendar fa-lg" />
                      </div>
                      <div className="flex-fill ms-3">
                        <p className="d-flex justify-content-between mb-0">
                          <span>Calendar</span>
                          <small>1HR</small>
                        </p>
                        <span>There's an upcoming holiday in 2 days.</span>
                      </div>
                    </a>
                  </li>
                  <li className="py-2 mb-1 border-bottom">
                    <a href="#" className="d-flex">
                      <div className="avatar rounded-circle no-thumbnail">
                        <i className="fa fa-calendar-o fa-lg" />
                      </div>
                      <div className="flex-fill ms-3">
                        <p className="d-flex justify-content-between mb-0">
                          <span>Leaves</span>
                          <small>1DAY</small>
                        </p>
                        <span>You have pending attendance requests.</span>
                      </div>
                    </a>
                  </li>
                  <li className="py-2 mb-1 border-bottom">
                    <a href="#" className="d-flex">
                      <div className="avatar rounded-circle no-thumbnail">
                        <i className="fa fa-clock-o fa-lg" />
                      </div>
                      <div className="flex-fill ms-3">
                        <p className="d-flex justify-content-between mb-0">
                          <span>Attendance</span> <small>1DAY</small>
                        </p>
                        <span>You have pending attendance requests.</span>
                      </div>
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="d-flex">
                      <div className="avatar rounded-circle no-thumbnail">
                        <i className="fa fa-sign-out fa-lg" />
                      </div>
                      <div className="flex-fill ms-3">
                        <p className="d-flex justify-content-between mb-0">
                          <span>Separation</span> <small>1HR</small>
                        </p>
                        <span>You have pending separation requests.</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* .card end */}
        </div>
      </div>
    );

}
export default LeavesAlerts;