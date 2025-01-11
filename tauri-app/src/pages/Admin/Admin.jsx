import React from "react";
import admin from "../pic/admin.png";
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
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        Teacher <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">Total</h5>

                      <h6 class="card-text">50</h6>

                      <button type="button mt-2" class="btn btn-success">
                        Manage Teacher
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">Part-Time Teacher</h5>
                      <hr />
                      <h5 class="card-text">Total</h5>

                      <h6 class="card-text">50</h6>

                      <button type="button mt-2" class="btn btn-success">
                        Manage Part-Timer Teachers
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">Student</h5>
                      <hr />
                      <h5 class="card-text">Total</h5>

                      <h6 class="card-text">50</h6>

                      <button type="button mt-2" class="btn btn-success">
                        Manage Students
                      </button>
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
