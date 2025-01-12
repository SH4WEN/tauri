import React, { useState } from "react";
import { Link } from "react-router-dom";

function OpenSched() {
  // Step 1: Set up state to manage visibility for both tables
  const [isAttendanceVisible, setIsAttendanceVisible] = useState(true);

  // Step 2: Create toggle functions
  const toggleAttendanceVisibility = () => {
    setIsAttendanceVisible(!isAttendanceVisible);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="card  mx-3">
        <div className="row g-0">
          <div className="col-md-3">
            <div className="card  mx-3 my-3">
              <div className="card-body">
                <div className="card text-bg-dark mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Scan Qr Code Now </h5>

                    <i className="bi bi-qr-code fs-1"></i>

                    <p className="card-text">gdg4jsdg</p>

                    <button type="button" class="btn btn-outline-light">
                      Generate QrCode
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title ">SECTION </h5>
              <hr />
              <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        Present <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">Total</h5>

                      <h6 className="card-text">50</h6>

                      {/* <button type="button mt-2" className="btn btn-success">
                        Manage Teacher
                      </button> */}
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        Late <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">Total</h5>

                      <h6 className="card-text">50</h6>

                      {/* <button type="button mt-2" className="btn btn-success">
                        Manage Teacher
                      </button> */}
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        Absent <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">Total</h5>

                      <h6 className="card-text">50</h6>

                      {/* <button type="button mt-2" className="btn btn-success">
                        Manage Teacher
                      </button> */}
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        Execuse <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 className="card-text">Total</h5>

                      <h6 className="card-text">50</h6>

                      {/* <button type="button mt-2" className="btn btn-success">
                        Manage Teacher
                      </button> */}
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card text-bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        Performance <i className="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />

                      <Link
                        to={"/grades"}
                        type="button mt-2"
                        className="btn btn-primary"
                      >
                        Manage
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance */}
        <div className="card text-bg-light mb-3 mx-3">
          <div className="card-header">
            Attendance Today
            <button type="button" className="btn btn-success float-end">
              <i className="bi bi-printer"></i>
            </button>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title">All Student</h5>
              </div>
              <div className="col text-end">
                <h6 className="card-title">December 25, 2025</h6>
              </div>
            </div>
            <hr />
            {/* Step 3: Conditionally render the table */}
            <button
              onClick={toggleAttendanceVisibility}
              className="btn btn-primary mb-3"
            >
              {isAttendanceVisible
                ? "Hide Attendance Table"
                : "Show Attendance Table"}
            </button>
            {isAttendanceVisible && (
              <div className="table-responsive">
                <table className="table table-light table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">SEM</th>
                      <th scope="col">LAST NAME</th>
                      <th scope="col">NAME</th>
                      <th scope="col">SECTION</th>
                      <th scope="col">TIME IN</th>
                      <th scope="col">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">23-00334</th>
                      <th scope="row">1st</th>
                      <td>Zoldick</td>
                      <td>Killua</td>
                      <td>Bsit-3D-SD</td>
                      <td>08:10 AM</td>
                      <td className="text-success">
                        <strong>Present</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">23-00335</th>
                      <th scope="row">1st</th>
                      <td>Zoldick</td>
                      <td>Illumi</td>
                      <td>Bsit-3D-SD</td>
                      <td className="text-danger">00:00 AM</td>
                      <td className="text-danger">
                        <strong>Absent</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">23-00336</th>
                      <th scope="row">1st</th>
                      <td>Zoldick</td>
                      <td>Illumi</td>
                      <td>Bsit-3D-SD</td>
                      <td className="text-warning">08:15 AM</td>
                      <td className="text-warning">
                        <strong>Late</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenSched;
