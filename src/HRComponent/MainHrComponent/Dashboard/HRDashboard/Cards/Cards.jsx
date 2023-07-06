import React from "react";

const Cards=()=>{
    return(
        <div className="row g-3 mb-3 row-deck">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card overflow-hidden">
            <a href="/hr_emp_status">
              <div className="card-body">
                <i className="fa fa-calendar-o fa-lg position-absolute top-0 end-0 p-3 text-primary" />
                <div className="mb-2 text-uppercase">ONBOARDINGS</div>
                <div>
                  <span className="h4">5</span>
                </div>
                <small className="text-muted">In progress</small>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card overflow-hidden">
            <a href="/hr_sep_dash">
              <div className="card-body">
                <i className="fa fa-clock-o fa-lg position-absolute top-0 end-0 p-3 text-secondary" />
                <div className="mb-2 text-uppercase">SEPARATIONS</div>
                <div>
                  <span className="h4">2</span>
                </div>
                <small className="text-muted">In progress</small>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card overflow-hidden">
            <a href="/hr_attendance">
              <div className="card-body">
                <i className="fa fa-money fa-lg position-absolute top-0 end-0 p-3 text-yellow" />
                <div className="mb-2 text-uppercase">ATTENDANCE</div>
                <div>
                  <span className="h4">50</span>
                </div>
                <small className="text-muted">Regularizations</small>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card overflow-hidden">
            <a href="/hr_expense">
              <div className="card-body">
                <i className="fa fa-bell-o fa-lg position-absolute top-0 end-0 p-3 text-info" />
                <div className="mb-2 text-uppercase">EXPENSES</div>
                <div>
                  <span className="h4">₹ 2000</span>
                </div>
                <small className="text-muted">Pending</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
}
export default Cards;