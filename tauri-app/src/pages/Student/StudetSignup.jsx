import React from "react";
import { Link } from "react-router-dom";

function StudetSignup() {
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
                  <b>REGISTER STUDENT</b>
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
                  {/* <div class="col-md-4">
                    <label for="course" class="form-label">
                      Course
                    </label>
                    <select id="course" class="form-select" multiple>
                      <option selected>Choose...</option>
                      <option>Bist 3a</option>
                      <option>Bist 3b</option>
                      <option>Bist 3C</option>
                      <option>Bist 3a</option>
                      <option>Bist 3b</option>
                      <option>Bist 3C</option>
                      <option>Bist 3a</option>
                      <option>Bist 3b</option>
                      <option>Bist 3C</option>
                    </select>
                  </div> */}

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

                  <div class="d-grid gap-2 text-center">
                    <br />
                    <Link
                      to={"/student"}
                      type="submit"
                      class="btn btn-outline-primary mx-5"
                    >
                      <b>Sign in</b>
                    </Link>
                    <button type="button" class="btn btn-outline-danger mx-5">
                      <b>Cancel</b>
                    </button>

                    <b>
                      Have an Accont ? <Link to={"/"}>Login</Link>{" "}
                    </b>
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

export default StudetSignup;
