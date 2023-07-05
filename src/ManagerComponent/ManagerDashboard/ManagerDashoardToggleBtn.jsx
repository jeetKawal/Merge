import React from "react";
const ManagerDashboardToggleBtn=()=>{
    const design=(
        <>
              <div className="d-flex">
            <button
              type="button"
              className="btn btn-link d-none d-xl-block sidebar-mini-btn p-0 text-primary"
            >
              <span className="hamburger-icon">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </span>
            </button>
            <a
              href="#"
              className="brand-icon d-flex align-items-center mx-2 mx-sm-3 text-primary"
            />
            <button
              type="button"
              className="btn btn-link d-block d-xl-none menu-toggle p-0 text-primary"
            >
              <span className="hamburger-icon">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </span>
            </button>
            <a
              href="#"
              className="brand-icon d-flex align-items-center mx-2 mx-sm-3 text-primary"
            >
              <img
                src="assets/images/logo/logo.png"
                alt="Mynd"
                style={{ height: 40 }}
              />
            </a>
          </div>
        </>
    );
    return design;
}
export default ManagerDashboardToggleBtn;