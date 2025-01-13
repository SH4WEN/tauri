import { Link } from "react-router-dom";
import logo2 from "../pic/logo2.png";

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
                <h1 className="text-center ">
                  {/* <img src={logo2} class=" img-fluid w-75 h-25 " alt="..." /> */}
                  <b>LOGIN</b>
                </h1>
                <hr />

                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      <b>Email address</b>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      <b> We'll never share your email with anyone else.</b>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      <b>Password</b>
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
                      <b>Remember Me</b>
                    </label>
                  </div>
                  <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-outline-primary mx-3">
                      <b>Login</b>
                    </button>
                    <button type="button" class="btn btn-outline-danger mx-3">
                      <b>Cancel</b>
                    </button>
                  </div>

                  <div class="d-grid gap-2 text-center ">
                    <b>
                      <a className="text-center" href="">
                        Forget paswword
                      </a>{" "}
                    </b>

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
