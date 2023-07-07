import React from "react";
const FilterCard =()=>{
    return(
        <>
            <div className=" col-lg-12 row rmargin">
                <div className="col-lg-1 py-1">
                  <h6 className="pt-2">Filters</h6>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12  py-1">
                  <div
                    className=" border rounded ypad"
                    id="reportrange"
                    style={{
                      background: "#fff",
                      cursor: "pointer",
                      padding: "5px 10px",
                      border: "1px solid #ccc",
                      width: "100%"
                    }}
                  >
                    <i className="fa fa-calendar" />
                    &nbsp;<span>March 8, 2022 - April 6, 2022</span>{" "}
                    <i className="fa fa-caret-down" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 py-1">
                  <select className="form-select borad">
                    <option selected="">Type</option>
                    <option>Earned Leave</option>
                    <option>Casual Leave</option>
                    <option>Sick Leave</option>
                    <option>Restricted Holiday</option>
                    <option>Compensatory-Off</option>
                    <option>Paternity Leave</option>
                  </select>
                </div>
                <div className="col-lg-2 col-md-6 py-1">
                  <div className="">
                    <input
                      className="form-control borad"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-10 py-1">
                  <button className="btn btn-custom mx-2">Apply</button>
                  <a href="#">Cancel</a>
                </div>
                <div className="col-lg-1 col-md-2 py-1" id="buttons">
                  <button
                    type="submit"
                    className="btn bg-transparent border-primary text-primary"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#proceed_req"
                    data-bs-placement="top"
                  >
                    Proceed
                  </button>
                </div>
              </div>
        </>
    );
}
export default FilterCard;