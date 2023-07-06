import React from "react";
const ManagerDashboardAlerts=()=>{
    const design =(
        <>
         <div className="card" style={{ height: 370 }}>
              <div className="card-header pb-3">
                <h6 className="card-title m-0">Alerts</h6>
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
                    <a href="manageralert">
                      Details <i className="fa fa-angle-right ms-1" />
                    </a>
                  </span>
                </div>
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
        </>
    );
    return design;
}
export default ManagerDashboardAlerts