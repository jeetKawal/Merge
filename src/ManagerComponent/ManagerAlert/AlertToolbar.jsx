import React from "react";
const AlertToolbar=()=>{
    return(<>
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
              <li className="breadcrumb-item active" aria-current="page">
                <a className="text-secondary" href="mngr_alerts.html">
                  Alerts
                </a>
              </li>
            </ol>
          </div>
        </div>{" "}
        {/* .row end */}
      </div>
    </div>
    </>);
}
export default AlertToolbar;