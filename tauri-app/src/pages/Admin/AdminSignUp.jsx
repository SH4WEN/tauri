import React from "react";
import { Link } from "react-router-dom";

function AdminSignUp() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div class="card text-bg-light mb-3">
              <div class="card-body">
                <h3 className="text-center">
                  <b>REGISTER ADMIN</b>
                </h3>
                <hr />
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
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>

                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>

                  <div class="col-md-12">
                    <label for="inputPassword4" class="form-label">
                      Access Key
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>

                  <div class="col-12 text-center">
                    <button type="submit" class="btn btn-outline-primary m-2">
                      Sign in
                    </button>
                    <button type="button" class="btn btn-outline-danger">
                      Cancel
                    </button>
                    <br />
                    <b>
                      Have an Accont ? <Link to={"/login"}>Login</Link>{" "}
                    </b>
                  </div>
                  <hr />
                  <div class="col-12 text-end">
                    <button type="button" class="btn btn-outline-danger">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSignUp;
