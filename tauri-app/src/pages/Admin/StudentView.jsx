import React from "react";

function StudentView() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div class="card text-bg-secondary mb-3">
        <div class="card-body">
          <h5 class="card-title">
            <b>TrackEd</b>
          </h5>
          <hr />
          <div className="card text-bg-light mb-3 mx-3">
            <div className="card-header">
              STUDENT'S
              <button type="button" className="btn btn-success float-end">
                <i className="bi bi-printer"></i>
              </button>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-light table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">SEM</th>
                      <th scope="col">LAST NAME</th>
                      <th scope="col">NAME</th>
                      <th scope="col">SECTION</th>
                      <th scope="col">MAJOR</th>
                      <th scope="col">STATUS</th>
                      <th scope="col" className="text-center">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">23-00334</th>
                      <th scope="row">1st</th>
                      <td>Zoldick</td>
                      <td>Killua</td>
                      <td>Bsit-3D-SD</td>
                      <td className="text-success">SOFT-DEV</td>
                      <td className="text-success">
                        <strong>IRREGULAR</strong>
                      </td>
                      <td>
                        <div class="d-grid gap-1 d-md-flex justify-content-md-center">
                          <button
                            class="btn btn-outline-primary me-md-2 btn-sm"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#studentadd"
                          >
                            update
                          </button>

                          {/* modal for updating students */}
                          <div
                            class="modal fade"
                            id="studentadd"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog  ">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    <b>UPDATE STUDENT</b>
                                  </h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <form class="row g-3">
                                    <div class="col-md-6">
                                      <label for="lastName" class="form-label">
                                        Last Name
                                      </label>
                                      <input
                                        class="form-control"
                                        id="lastName"
                                      />
                                    </div>

                                    <div class="col-md-6">
                                      <label for="firstName" class="form-label">
                                        First Name
                                      </label>
                                      <input
                                        class="form-control"
                                        id="firstName"
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
                                        class="form-control"
                                        id="inputPassword4"
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

                                    <div class="col-12 ">
                                      <br />
                                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button
                                          type="button"
                                          class="btn btn-secondary"
                                          data-bs-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                        >
                                          UPDATE
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end of modal */}

                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm"
                          >
                            delete
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">23-00335</th>
                      <th scope="row">1st</th>
                      <td>Zoldick</td>
                      <td>Illumi</td>
                      <td>Bsit-3D-SD</td>
                      <td className="text-danger">WEB</td>
                      <td className="text-danger">
                        <strong>INC</strong>
                      </td>
                      <td>
                        <div class="d-grid gap-1 d-md-flex justify-content-md-center">
                          <button
                            class="btn btn-outline-primary me-md-2 btn-sm"
                            type="button"
                          >
                            update
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm"
                          >
                            delete
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">23-00336</th>
                      <th scope="row">1st</th>
                      <td>Zoldick</td>
                      <td>Illumi</td>
                      <td>Bsit-3D-SD</td>
                      <td className="text-primary">NET</td>
                      <td className="text-primary">
                        <strong>REGULAR</strong>
                      </td>
                      <td>
                        <div class="d-grid gap-1 d-md-flex justify-content-md-center">
                          <button
                            class="btn btn-outline-primary me-md-2 btn-sm"
                            type="button"
                          >
                            update
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm"
                          >
                            delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentView;
