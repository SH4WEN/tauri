import React from "react";
import admin from "../pic/admin.png";
import { Link } from "react-router-dom";

export function Admin() {
  return (
    <>
      <br />
      <br />
      <br />
      <div class="card mx-3">
        <div class="row g-0">
          <div class="col-md-4">
            <div class="card text-bg-secondary mx-3 my-3">
              <div class="card-body">
                <img
                  className="img-fluid rounded-circle w-75 ms-5"
                  alt="..."
                  src={admin}
                />
                <h5 class="card-title text-center mt-3">
                  <i class="bi bi-person-circle"></i> Netero Nen Master
                </h5>
                <p class="card-text">
                  <strong>Admin Details: </strong>{" "}
                </p>
                <p class="card-text">
                  <strong>Admin Details: </strong>{" "}
                </p>
                <p class="card-text">
                  <strong>Admin Details: </strong>{" "}
                </p>
                <p class="card-text">
                  <strong>Admin Details: </strong>{" "}
                </p>
                <p class="card-text">
                  <strong>Admin Details: </strong>{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title ">Admin Dashboard </h5>
              <hr />
              <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        Teacher <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">Total</h5>

                      <h6 class="card-text">50</h6>

                      <Link
                        to={"/teacherView"}
                        type="button"
                        class="btn btn-outline-primary"
                      >
                        See Teacher
                      </Link>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        Student <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">Total</h5>

                      <h6 class="card-text">50</h6>

                      <Link
                        to={"/studentView"}
                        type="button"
                        class="btn btn-outline-primary"
                      >
                        See Student
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        Section <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">Total</h5>

                      <h6 class="card-text">50</h6>

                      <button
                        // to={"/studentView"}
                        type="button"
                        class="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        +
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg ">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Modal title
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
                                  <label for="sectioncode" class="form-label">
                                    Code Section
                                  </label>
                                  <input
                                    class="form-control"
                                    id="sectioncode"
                                  />
                                </div>

                                <div class="col-md-6">
                                  <label for="sectionname" class="form-label">
                                    Section Name
                                  </label>
                                  <input
                                    class="form-control"
                                    id="sectionname"
                                  />
                                </div>
                              </form>
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
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div class="card ">
                <div class="card-body">
                  <h5 class="card-title">Analytics </h5>
                  <hr />
                  <p class="card-text">Chart for Analytics</p>
                  <br />
                  <br />
                  <br />
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
                <div class="card-footer text-body-secondary text-center">
                  2 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
