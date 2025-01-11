import React from "react";
import student_logo from "../pic/student_logo.webp";
import { Link } from "react-router-dom";

export function Student() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="card mx-3">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="card text-bg-success mx-3 my-3">
              <div className="card-body">
                <img
                  className="img-fluid rounded-circle w-75 ms-5"
                  alt="Student Logo"
                  src={student_logo}
                />
                <h5 className="card-title text-center mt-3">
                  <i className="bi bi-person-circle"></i> Netero Nen Master
                </h5>
                <p className="card-text">Student Details:</p>
                {/* Replace the following with actual student details */}
                <p className="card-text">Age: 20</p>
                <p className="card-text">Major: Computer Science</p>
                <p className="card-text">Year: 2nd Year</p>
                <p className="card-text">GPA: 3.8</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Student Schedule</h5>
              <hr />
              <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        ITELCTV 1 <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">M W</h5>
                      <h6 className="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/studentClass"}
                        className="btn btn-success mt-2"
                        type="button"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        ITELCTV 1 <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">M W</h5>
                      <h6 className="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/studentClass"}
                        className="btn btn-success mt-2"
                        type="button"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        ITELCTV 1 <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">M W</h5>
                      <h6 className="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/studentClass"}
                        className="btn btn-success mt-2"
                        type="button"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        ITELCTV 1 <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">M W</h5>
                      <h6 className="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/studentClass"}
                        className="btn btn-success mt-2"
                        type="button"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        ITELCTV 1 <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">M W</h5>
                      <h6 className="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/studentClass"}
                        className="btn btn-success mt-2"
                        type="button"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        ITELCTV 1 <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">M W</h5>
                      <h6 className="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/studentClass"}
                        className="btn btn-success mt-2"
                        type="button"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        ITELCTV 1 <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">M W</h5>
                      <h6 className="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/studentClass"}
                        className="btn btn-success mt-2"
                        type="button"
                      >
                        Open Class
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        ITELCTV 1 <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">M W</h5>
                      <h6 className="card-text">08:00 - 10:00 AM</h6>

                      <Link
                        to={"/studentClass"}
                        className="btn btn-success mt-2"
                        type="button"
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
