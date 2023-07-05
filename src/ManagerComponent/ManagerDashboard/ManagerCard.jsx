import React from "react";
const Managercard =()=>{
    const design =(
        <>
         <div className="row g-3 mb-3 row-deck">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card overflow-hidden">
              <a href="/managerleave">
                <div className="card-body">
                  <i className="fa fa-calendar-o fa-lg position-absolute top-0 end-0 p-3 text-primary" />
                  <div className="mb-2 text-uppercase">LEAVES</div>
                  <div>
                    <span className="h4">3</span>
                  </div>
                  <small className="text-muted">Taken</small>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card overflow-hidden">
              <a href="/managerattendance">
                <div className="card-body">
                  <i className="fa fa-clock-o fa-lg position-absolute top-0 end-0 p-3 text-secondary" />
                  <div className="mb-2 text-uppercase">ATTENDANCE</div>
                  <div>
                    <span className="h4">2</span>
                  </div>
                  <small className="text-muted">Missing</small>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card overflow-hidden">
              <a href="managerexpense">
                <div className="card-body">
                  <i className="fa fa-money fa-lg position-absolute top-0 end-0 p-3 text-yellow" />
                  <div className="mb-2 text-uppercase">EXPENSES</div>
                  <div>
                    <span className="h4">₹ 2000</span>
                  </div>
                  <small className="text-muted">Available balance</small>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card overflow-hidden">
              <a href="/manageralert">
                <div className="card-body">
                  <i className="fa fa-bell-o fa-lg position-absolute top-0 end-0 p-3 text-info" />
                  <div className="mb-2 text-uppercase">ALERTS</div>
                  <div>
                    <span className="h4">5</span>
                  </div>
                  <small className="text-muted">New</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        </>
    );
    return design;
}
export default Managercard;