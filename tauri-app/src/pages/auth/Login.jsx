import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-5">
            <div class="card text-bg-light mb-3">
              <div class="card-body">
                <h3 className="text-center">
                  <b>Login</b>
                </h3>
                <hr />

                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      s
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                  <div className="mb-3 text-center ">
                    <button type="submit" class="btn btn-outline-primary mx-3">
                      <b>Login</b>
                    </button>
                    <button type="button" class="btn btn-outline-danger mx-3">
                      <b>Cancel</b>
                    </button>
                    <br />
                    <br />
                    <b>
                      <a href="">Forget paswword</a>{" "}
                    </b>
                    <br />
                    <b>
                      Don't have an Accont ? <Link to={"/signup"}>SignUp</Link>{" "}
                    </b>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
