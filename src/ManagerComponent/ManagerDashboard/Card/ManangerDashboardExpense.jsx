import React from "react";
const ManagerDashboardExpense=()=>{
    const design = (
        <>
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
                    <a href="/managerexpense">
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
        </>
    );
    return design;
}
export default ManagerDashboardExpense;