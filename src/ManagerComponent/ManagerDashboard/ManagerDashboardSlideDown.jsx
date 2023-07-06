import React from "react";
const ManagerDashboardSlideDown=()=>{
    const design=(
        <>
         <div className="card shadow rounded-4 search-result slidedown">
              <div className="card-body">
                <small className="text-uppercase text-muted">
                  Recent searches
                </small>
                <div className="d-flex flex-wrap align-items-start mt-2 mb-4">
                  <a
                    className="small rounded py-1 px-2 m-1 fw-normal bg-primary text-white"
                    href="#"
                  >
                    Shefali Jain
                  </a>
                  <a
                    className="small rounded py-1 px-2 m-1 fw-normal bg-secondary text-white"
                    href="#"
                  >
                    Raunak Sharma
                  </a>
                  <a
                    className="small rounded py-1 px-2 m-1 fw-normal bg-info text-white"
                    href="#"
                  >
                    Rohit Kumar
                  </a>
                  <a
                    className="small rounded py-1 px-2 m-1 fw-normal bg-dark text-white"
                    href="#"
                  >
                    Kevin Gill
                  </a>
                  <a
                    className="small rounded py-1 px-2 m-1 fw-normal bg-danger text-white"
                    href="#"
                  >
                    Shubham Gill
                  </a>
                </div>
                <small className="text-uppercase text-muted">Suggestions</small>
                <div className="card list-group list-group-flush list-group-custom mt-2">
                  <a
                    className="list-group-item list-group-item-action text-truncate"
                    href="#"
                  >
                    <div className="fw-bold">Mark Anthony</div>
                    <small className="text-muted">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </small>
                  </a>
                  <a
                    className="list-group-item list-group-item-action text-truncate"
                    href="#"
                  >
                    <div className="fw-bold">Sakshi Gaur</div>
                    <small className="text-muted">
                      There are many variations of passages of Lorem Ipsum
                      available
                    </small>
                  </a>
                </div>
              </div>
            </div>
        </>
    );
    return design
}
export default ManagerDashboardSlideDown;