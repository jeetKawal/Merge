import React from "react";
const AlertExpense=()=>{
    return(<>
      <div className="tab-pane fade" id="expenses" role="tabpanel">
            {/* <div class="row-title">
                              <h5>Documents</h5>
                              
                          </div> */}
            <div className="card mt-2">
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
                <div className="col-lg-2 col-md-9 py-1">
                  <button className="btn btn-custom mx-2">Apply</button>
                  <a href="#">Cancel</a>
                </div>
                <div className="col-lg-1 col-md-4 py-1" id="buttons2">
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
              <div className="card-body">
                <table id="contact_list" className="table align-middle mb-0">
                  <thead style={{ borderBottom: "white" }}>
                    <tr>
                      <th style={{ width: 20 }}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton2()"
                            id="checkAll2"
                          />
                        </div>
                      </th>
                      <th />
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                        </div>
                      </td>
                      <td style={{ width: 190 }}>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar1.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Shubham Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div>
                          <div className="mb-0">
                            Shubham has applied for Expense reimbursement.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar2.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Rohit Kumar</div>
                              <span className="text-muted">
                                Full stack developer
                              </span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Rohit has applied for Expense reimbursement.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">2 hour</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="tableCheckbox"
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar3.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Raunak Sharma</div>
                              <span className="text-muted">Tester</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Raunak has applied for Expense reimbursement.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="tableCheckbox"
                          />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#expense_request_ro"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#expense_request_ro"
                          data-bs-placement="top"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/xs/avatar4.jpg"
                              className="rounded-circle avatar"
                              alt=""
                            />
                            <div className="ms-2">
                              <div className="mb-0">Kevin Gill</div>
                              <span className="text-muted">Web Designer</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mb-0">
                            Kevin has applied for Expense reimbursement.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </>);
}
export default AlertExpense;