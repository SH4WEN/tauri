import React from "react";
import admin from "../pic/admin.png";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <>
      <br />
      <br />
      <br />

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-8">
            <div class="card text-bg-light mb-3">
              <div class="card-body">
                <h3 className="text-center">
                  <b>Select Role</b>
                </h3>
                <hr />
                <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img src={admin} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">
                          <b>Admin</b>
                        </h5>
                        <Link
                          to={"/admin-signup"}
                          type="button"
                          class="btn btn-outline-primary"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="col">
                    <div class="card h-100">
                      <img src={admin} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">
                          <b>Teacher</b>
                        </h5>
                        <Link
                          to={"/teacherlogin"}
                          type="button"
                          class="btn btn-outline-primary"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="col">
                    <div class="card h-100">
                      <img src={admin} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">
                          <b>Studemt</b>
                        </h5>
                        <Link
                          to={"/student-signup"}
                          type="button"
                          class="btn btn-outline-primary"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
