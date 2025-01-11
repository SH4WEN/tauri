import React from "react";
import { Link } from "react-router-dom";
import admin from "../pic/admin.png";

export function Teacher() {
  return (
    <>
      <br />
      <br />
      <br />
      <div class="card  mx-3">
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
                <p class="card-text">Teacher Details:</p>
                <p class="card-text">Teacher Details:</p>
                <p class="card-text">Teacher Details:</p>
                <p class="card-text">Teacher Details:</p>
                <p class="card-text">Teacher Details:</p>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title ">Teacher Schedule </h5>
              <hr />
              <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        BSIT-3D-SD <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">M W </h5>

                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/openSched"}
                        type="button mt-2"
                        class="btn btn-success"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        BSIT-3D-SD <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">M W </h5>

                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/openSched"}
                        type="button mt-2"
                        class="btn btn-success"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        BSIT-3D-SD <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">M W </h5>

                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/openSched"}
                        type="button mt-2"
                        class="btn btn-success"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        BSIT-3D-SD <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">M W </h5>

                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/openSched"}
                        type="button mt-2"
                        class="btn btn-success"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        BSIT-3D-SD <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">M W </h5>

                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/openSched"}
                        type="button mt-2"
                        class="btn btn-success"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        BSIT-3D-SD <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">M W </h5>

                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/openSched"}
                        type="button mt-2"
                        class="btn btn-success"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        BSIT-3D-SD <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">M W </h5>

                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/openSched"}
                        type="button mt-2"
                        class="btn btn-success"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        BSIT-3D-SD <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">M W </h5>

                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/openSched"}
                        type="button mt-2"
                        class="btn btn-success"
                      >
                        Open Class
                      </Link>
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
