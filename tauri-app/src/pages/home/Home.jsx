import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div class="card border-secondary mb-3">
          <Link to={"/login"} type="button" class="btn btn-primary float-end">
            LOGIN
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
