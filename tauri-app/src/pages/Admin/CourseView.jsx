import React from "react";

function CourseView() {
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
          <div class="card text-bg-light mb-3 mx-3">
            <div class="card-header">
              <b>ALL COURSE'S</b>

              <button type="button" class="btn btn-success float-end">
                <i class="bi bi-printer"></i>
              </button>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-light table-hover">
                  <thead>
                    <tr>
                      <th scope="col">COURSE CODE</th>
                      <th scope="col">COURSE DETAIL</th>
                      <th scope="col">TEACHER</th>
                      <th scope="col " className="text-center">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">CC-123</th>
                      <td>Course 1</td>
                      <td>Zoldick</td>
                      <td>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                          <button
                            class="btn btn-outline-primary btn-sm me-md-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#courseupdate"
                          >
                            Update
                          </button>

                          {/* modal fro updating Course's */}
                          <div
                            class="modal fade"
                            id="courseupdate"
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
                                    <b>UPDATE COURSE</b>
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
                                    <div class="col-md-12">
                                      <label
                                        for="sectioncode"
                                        class="form-label"
                                      >
                                        Course Code
                                      </label>
                                      <input
                                        class="form-control"
                                        id="sectioncode"
                                      />
                                    </div>

                                    <div class="col-md-12">
                                      <label
                                        for="sectionname"
                                        class="form-label"
                                      >
                                        Course Detail
                                      </label>
                                      <input
                                        class="form-control"
                                        id="sectionname"
                                      />
                                    </div>

                                    <div class="col-md-12">
                                      <label for="course" class="form-label">
                                        Course Teacher
                                      </label>
                                      <select id="course" class="form-select">
                                        <option>TEacher 1</option>
                                        <option>TEacher 2</option>
                                        <option>TEacher 3</option>
                                      </select>
                                    </div>
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
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end of modal */}

                          <button
                            class="btn btn-outline-danger btn-sm"
                            type="button"
                          >
                            Delete
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

export default CourseView;
