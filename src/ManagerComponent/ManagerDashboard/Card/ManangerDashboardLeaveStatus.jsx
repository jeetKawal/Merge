import React from "react";
const ManagerDashboardLeaveStatus=()=>{
    const design=(
        <>
         <div className="card" style={{ height: 370 }}>
              <div className="card-header pb-3">
                <h6 className="card-title m-0">Leaves Status</h6>
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
                    <a href="managerleave">
                      Details <i className="fa fa-angle-right ms-1" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="card-body custom_scroll pt-2">
                <div className="card col mb-2">
                  <div className="card border-0 alert-success alert mb-0">
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
                            <span>3.5 days</span>
                          </label>
                        </div>
                        <div className=" mb-0 ">
                          <label className="d-flex justify-content-between">
                            <span className="text-success">Approved</span>
                            <span className="text-muted">5 Feb - 8 Feb</span>
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
                        src="assets/images/xs/avatar2.jpg"
                        className="rounded-circle avatar"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <div className="h6 mb-0 ">
                          <label className=" d-flex justify-content-between ">
                            Shiva Shukla
                            <span>5 days</span>
                          </label>
                        </div>
                        <div className=" mb-0 ">
                          <label className="d-flex justify-content-between">
                            <span className="text-danger">Rejected</span>
                            <span className="text-muted">10 Jan - 14 Jan</span>
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
                            <span>5 days</span>
                          </label>
                        </div>
                        <div className=" mb-0 ">
                          <label className="d-flex justify-content-between">
                            <span className="text-warning">Pending</span>
                            <span className="text-muted">10 Jan - 14 Jan</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
        </>
    );
    return design;
}
export default ManagerDashboardLeaveStatus;