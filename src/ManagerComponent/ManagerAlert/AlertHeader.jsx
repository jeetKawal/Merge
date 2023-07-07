import React from "react";
const ALertHeader=()=>{
    return(
        <>
           <div className="">
          <h4>Alerts</h4>
        </div>
        <ul
          className="nav nav-tabs tab-card border-bottom-0 pt-2 fs-6 justify-content-center justify-content-md-start"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              href="#leaves"
              role="tab"
            >
              <i className="fa fa-calendar-o" />
              <span className="d-none d-sm-inline-block ms-2">Leaves</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="/manageralert/alertattendance"
              role="tab"
            >
              <i className="fa fa-clock-o" />
              <span className="d-none d-sm-inline-block ms-2">Attendance</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="/manageralert/alertexpense"
              role="tab"
            >
              <i className="fa fa-money" />
              <span className="d-none d-sm-inline-block ms-2">Expense</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="/manageralert/alertseparation"
              role="tab"
            >
              <i className="fa fa-sign-out" />
              <span className="d-none d-sm-inline-block ms-2">Separation</span>
            </a>
          </li>
        </ul>
        </>
    );

}
export default ALertHeader;