import React from "react";
const FilterTable =()=>{
    return(
        <>
          <table id="contact_list" className="table align-middle mb-0">
                  <thead style={{ borderBottom: "white" }}>
                    <tr>
                      <th style={{ width: 20 }}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            onclick="hideButton()"
                            id="checkAll"
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
                            Shubham has applied for 3 days leave.
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
                            Rohit has applied for 3 days leave.
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
                            Raunak has applied for 1 day leave.
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
                            Kevin has applied for 3 days leave.
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">1 day</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
        </>
    );
}
export default FilterTable;