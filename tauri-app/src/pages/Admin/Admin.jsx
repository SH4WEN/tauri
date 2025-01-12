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
                {/* teacher */}
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        <Link
                          to={"/teacherView"}
                          type="button"
                          class="btn btn-outline-info"
                        >
                          <b>See Teacher</b>
                        </Link>
                      </h5>
                      <hr />
                      <h5 class="card-text">
                        {" "}
                        <b>Total</b>
                      </h5>

                      <h6 class="card-text">50</h6>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          type="button"
                          class="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#teacheradd"
                        >
                          +
                        </button>
                      </div>

                      <div
                        class="modal fade"
                        id="teacheradd"
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
                                <b>ADD TEACHER</b>
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
                                  <input class="form-control" id="lastName" />
                                </div>

                                <div class="col-md-6">
                                  <label for="firstName" class="form-label">
                                    First Name
                                  </label>
                                  <input class="form-control" id="firstName" />
                                </div>

                                <div class="col-md-6">
                                  <label for="inputEmail4" class="form-label">
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
                                  <label for="department" class="form-label">
                                    Department
                                  </label>
                                  <select id="department" class="form-select">
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
                                      ADDD
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*student*/}
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        <Link
                          to={"/studentView"}
                          type="button"
                          class="btn btn-outline-info"
                        >
                          <b>See Student</b>
                        </Link>
                      </h5>
                      <hr />
                      <h5 class="card-text ">
                        <b>Total</b>
                      </h5>

                      <h6 class="card-text">50</h6>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          // to={"/studentView"}
                          type="button"
                          class="btn btn-outline-primary text-end"
                          data-bs-toggle="modal"
                          data-bs-target="#studentadd"
                        >
                          <b className="text-end">+</b>
                        </button>
                      </div>

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
                                <b>ADD TEACHER</b>
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
                                  <input class="form-control" id="lastName" />
                                </div>

                                <div class="col-md-6">
                                  <label for="firstName" class="form-label">
                                    First Name
                                  </label>
                                  <input class="form-control" id="firstName" />
                                </div>

                                <div class="col-md-6">
                                  <label for="inputEmail4" class="form-label">
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
                                  <label for="department" class="form-label">
                                    Department
                                  </label>
                                  <select id="department" class="form-select">
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
                                      ADDD
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*section*/}
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        <Link
                          to={"/sectionView"}
                          type="button"
                          class="btn btn-outline-info"
                        >
                          <b>See Section</b>
                        </Link>
                      </h5>
                      <hr />
                      <h5 class="card-text">
                        {" "}
                        <b>Total</b>
                      </h5>

                      <h6 class="card-text">50</h6>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          // to={"/studentView"}
                          type="button"
                          class="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          +
                        </button>
                      </div>

                      <div
                        class="modal fade"
                        id="exampleModal"
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
                                <b>ADD SECTION</b>
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
                                  <label for="sectioncode" class="form-label">
                                    Code Section
                                  </label>
                                  <input
                                    class="form-control"
                                    id="sectioncode"
                                  />
                                </div>

                                <div class="col-md-12">
                                  <label for="sectionname" class="form-label">
                                    Section Name
                                  </label>
                                  <input
                                    class="form-control"
                                    id="sectionname"
                                  />
                                </div>

                                <div class="col-md-12">
                                  <label for="course" class="form-label">
                                    Major
                                  </label>
                                  <select id="course" class="form-select">
                                    <option>WEB AND GAME</option>
                                    <option>SOFTWARE DEVELOPMENT</option>
                                    <option>NETWORKING</option>
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
                                  <button type="button" class="btn btn-primary">
                                    ADDD
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* course */}
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        <Link
                          to={"/courseView"}
                          type="button"
                          class="btn btn-outline-info"
                        >
                          <b>See Course's</b>
                        </Link>
                      </h5>
                      <hr />
                      <h5 class="card-text">
                        <b>Total</b>
                      </h5>

                      <h6 class="card-text">50</h6>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          // to={"/studentView"}
                          type="button"
                          class="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#courseadd"
                        >
                          +
                        </button>
                      </div>

                      <div
                        class="modal fade"
                        id="courseadd"
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
                                <b>ADD COURSE</b>
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
                                  <label for="sectioncode" class="form-label">
                                    Course Code
                                  </label>
                                  <input
                                    class="form-control"
                                    id="sectioncode"
                                  />
                                </div>

                                <div class="col-md-12">
                                  <label for="sectionname" class="form-label">
                                    Course Name
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
                                  <button type="button" class="btn btn-primary">
                                    ADDD
                                  </button>
                                </div>
                              </form>
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
