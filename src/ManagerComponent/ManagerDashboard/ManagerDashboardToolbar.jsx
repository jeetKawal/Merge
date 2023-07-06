import React from "react";
const ManagerDashboardToolbar=()=>{
    const design=(
        <>
         <div className="page-toolbar px-xl-4 px-sm-2 px-0 pt-3">
      <div className="container-fluid">
        <div className="row mb-3 align-items-center">
          <div className="col">
            <ol className="breadcrumb bg-transparent mb-0">
              <li className="breadcrumb-item">
                <a className="text-secondary" href="index.html">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-secondary" href="dashboard.html">
                  Dashboard
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                My Dashboard
              </li>
            </ol>
          </div>
        </div>{" "}
        {/* .row end */}
        <div className="row align-items-center">
          <div className="col">
            <h1 className="fs-5 color-900 mt-1 mb-0">Welcome, Mark Anthony!</h1>
          </div>
        </div>{" "}
        {/* .row end */}
      </div>
    </div>
        </>
    );
    return design;
}
export default ManagerDashboardToolbar;