import React from "react";
import student_logo from "../pic/student_logo.webp";

export function StudentClass() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="card mx-3">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4 mt-3">
              <div className="card border-secondary mb-3 col-10 mx-auto mt-3">
                <div className="card-body text-secondary">
                  <div class="card border-success mb-3">
                    <div class="card-body text-success">
                      <h5 class="card-title">Scan Now !!!!</h5>
                      <p class="card-text">.............</p>
                      <button type="button" class="btn btn-outline-success">
                        scan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div className="card border-secondary mb-3 col-12 mx-auto mt-3">
                  <div className="card-header">BSIT 3D</div>
                  <div className="card-body text-secondary">
                    <h5 className="card-title">Teacher Name</h5>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="code" className="form-label">
                          Enter Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="code"
                          placeholder="Enter Code"
                        />
                      </div>

                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        submit
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog ">
                          <div class="modal-content">
                            <div class="modal-header text-success">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Ok na bossing
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body text-success">
                              Access Granted!{" "}
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-success"
                                data-bs-dismiss="modal"
                              >
                                ok
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}

export default StudentClass;
