import React, { useState } from "react";

function ManageTeacher() {
  // Step 1: Set up state to manage visibility for both tables
  const [isAttendanceVisible, setIsAttendanceVisible] = useState(true);

  // Step 2: Create toggle functions
  const toggleAttendanceVisibility = () => {
    setIsAttendanceVisible(!isAttendanceVisible);
  };
  return (
    <div>
      <br />
      <br />
      <br />

      <div className="card text-bg-light mb-3 mx-3">
        <div className="card-header">
          Teacher Management
          <button type="button" className="btn btn-success float-end">
            <i className="bi bi-printer"></i>
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="card-title">All Teacher</h5>
            </div>
            <div className="col text-end">
              <h6 className="card-title">December 25, 2025</h6>
            </div>
          </div>
          <hr />
          {/* Step 3: Conditionally render the table */}
          <button
            onClick={toggleAttendanceVisibility}
            className="btn btn-primary mb-3"
          >
            {isAttendanceVisible ? "Hide " : "Show "}
          </button>
          {isAttendanceVisible && (
            <table className="table table-light table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">SEM</th>
                  <th scope="col">LAST NAME</th>
                  <th scope="col">FIRST NAME</th>
                  <th scope="col">ADVI.CLASSS</th>
                  <th scope="col">COURSE SUB.</th>
                  <th scope="col">DEPARTMENT</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">23-00334</th>
                  <th scope="row">1st</th>
                  <td>Zoldick</td>
                  <td>Killua</td>
                  <td>Bsit-3D-SD</td>
                  <td>ITELECTV </td>
                  <td className="text-success">
                    <strong>BSIT</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      view
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Teacher Last Name
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div class="card text-bg-light mb-3">
                              <div class="card-body">
                                <strong>Details: </strong>
                                <br />
                                <strong>Details: </strong>
                                <br />
                                <strong>Details: </strong>
                                <br />
                                <strong>Details: </strong>
                                <br />
                                <strong>Details: </strong>
                                <br />
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="btn btn-outline-warning btn-sm me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#update"
                    >
                      update
                    </button>

                    <div
                      class="modal fade"
                      id="update"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Update Teacher
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div class="card text-bg-light mb-3">
                              <div class="card-body">
                                <form>
                                  <form class="row g-3">
                                    <div class="col-md-6">
                                      <label
                                        for="inputEmail4"
                                        class="form-label"
                                      >
                                        Last Name
                                      </label>
                                      <input
                                        class="form-control"
                                        id="inputEmail4"
                                      />
                                    </div>

                                    <div class="col-md-6">
                                      <label
                                        for="inputEmail4"
                                        class="form-label"
                                      >
                                        First Name
                                      </label>
                                      <input
                                        class="form-control"
                                        id="inputEmail4"
                                      />
                                    </div>

                                    <div class="col-md-6">
                                      <label
                                        for="inputEmail4"
                                        class="form-label"
                                      >
                                        Email
                                      </label>
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="inputEmail4"
                                      />
                                    </div>

                                    <div class="col-md-6">
                                      <label
                                        for="inputPassword4"
                                        class="form-label"
                                      >
                                        Password
                                      </label>
                                      <input
                                        type="password"
                                        class="form-control "
                                        id="inputPassword4"
                                        disabled
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <label for="section" class="form-label">
                                        Section
                                      </label>
                                      <select id="section" class="form-select">
                                        <option selected>Choose...</option>
                                        <option>Bist 3a</option>
                                        <option>Bist 3b</option>
                                        <option>Bist 3C</option>
                                      </select>
                                    </div>

                                    <div class="col-md-4">
                                      <label for="course" class="form-label">
                                        Course
                                      </label>
                                      <select id="course" class="form-select">
                                        <option selected>Choose...</option>
                                        <option>Bist 3a</option>
                                        <option>Bist 3b</option>
                                        <option>Bist 3C</option>
                                      </select>
                                    </div>

                                    <div class="col-md-4">
                                      <label
                                        for="department"
                                        class="form-label"
                                      >
                                        Department
                                      </label>
                                      <select
                                        id="department"
                                        class="form-select"
                                      >
                                        <option selected>Choose...</option>
                                        <option>Bist 3a</option>
                                        <option>Bist 3b</option>
                                        <option>Bist 3C</option>
                                      </select>
                                    </div>

                                    <div class="col-12">
                                      <button
                                        type="submit"
                                        class="btn btn-primary"
                                      >
                                        Sign in
                                      </button>
                                    </div>
                                  </form>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="button" class="btn btn-outline-danger btn-sm">
                      delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">23-00335</th>
                  <th scope="row">1st</th>
                  <td>Zoldick</td>
                  <td>Illumi</td>
                  <td>Bsit-3D-SD</td>
                  <td className="text-danger">MOR</td>
                  <td className="text-danger">
                    <strong>BSIT</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row">23-00336</th>
                  <th scope="row">1st</th>
                  <td>Zoldick</td>
                  <td>Illumi</td>
                  <td>Bsit-3D-SD</td>
                  <td className="text-warning">GE-101</td>
                  <td className="text-warning">
                    <strong>BSIS</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageTeacher;
