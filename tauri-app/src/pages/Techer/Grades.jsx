import React, { useState } from "react";
function Grades() {
  const [isGradesVisible, setIsGradesVisible] = useState(true);
  const [isfGradesVisible, setIsfGradesVisible] = useState(true);

  const toggleGradesVisibility = () => {
    setIsGradesVisible(!isGradesVisible);
  };
  const togglefGradesVisibility = () => {
    setIsfGradesVisible(!isfGradesVisible);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div class="card ">
        <div class="row g-0 ">
          <div class="col-md-4">
            <div class="card text-bg-success mx-3 my-3">
              <div class="card-body">
                <img className="img-fluid rounded-circle w-75 ms-5" alt="..." />
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
              <h5 class="card-title ">PERFORMANCE </h5>
              <hr />
              <div class="row row-cols-1 row-cols-md-3 g-4">
                {/* Quiz */}
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">
                        QUIZ <i class="bi bi-person-vcard-fill"></i>
                      </h5>
                      <hr />
                      <h5 class="card-text">TOTAL </h5>
                      <h6 class="card-text">ADD QUIZ 1</h6>

                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Enter Score
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-xl">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div class="table-responsive">
                                <table className="table table-light table-hover">
                                  <thead>
                                    <tr>
                                      <th scope="col">ID</th>
                                      <th scope="col">LAST NAME</th>
                                      <th scope="col">NAME</th>

                                      <th scope="col">QUIZ 1</th>
                                      <th scope="col">QUIZ 2</th>
                                      <th scope="col">QUIZ 3</th>
                                      <th scope="col">QUIZ 4</th>
                                      <th scope="col">QUIZ 5</th>
                                      <th scope="col">TOTAL</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">23-00334</th>
                                      <td>Zoldick</td>
                                      <td>Killua</td>

                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>

                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-success">
                                        <strong>PASSED</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">23-00335</th>
                                      <td>Zoldick</td>
                                      <td>Illumi</td>

                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>

                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-danger">
                                        <strong>FAILED</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">23-00336</th>
                                      <td>Zoldick</td>
                                      <td>Illumi</td>

                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>

                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-warning">
                                        <strong>INC</strong>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of quiz */}
                {/* CHAPTER EXAM */}
                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">CHAPTER EXAM</h5>
                      <hr />
                      <h5 class="card-text">TOTAL </h5>
                      <h6 class="card-text">2</h6>
                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalcpe"
                      >
                        Enter Score
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModalcpe"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-xl">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div class="table-responsive">
                                <table className="table table-light table-hover">
                                  <thead>
                                    <tr>
                                      <th scope="col">ID</th>
                                      <th scope="col">LAST NAME</th>
                                      <th scope="col">NAME</th>
                                      <th scope="col">CHAP. EXAM 1</th>
                                      <th scope="col">CHAP. EXAM 2</th>
                                      <th scope="col">CHAP. EXAM 3</th>
                                      <th scope="col">REMARKS</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">23-00334</th>
                                      <td>Zoldick</td>
                                      <td>Killua</td>

                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>

                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-success">
                                        <strong>PASSED</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">23-00335</th>
                                      <td>Zoldick</td>
                                      <td>Illumi</td>

                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>

                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-danger">
                                        <strong>FAILED</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">23-00336</th>
                                      <td>Zoldick</td>
                                      <td>Illumi</td>

                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>

                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-warning">
                                        <strong>INC</strong>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}

                <div class="col">
                  <div class="card text-bg-light h-100">
                    <div class="card-body">
                      <h5 class="card-title">MID/FINAL EXAM</h5>

                      <hr />
                      <h5 class="card-text">TOTAL </h5>
                      <h6 class="card-text">1</h6>
                      <h6 class="card-text">08:00 - 10:00 AM</h6>

                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalmdt"
                      >
                        Enter Score
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModalmdt"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-xl">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                <b>MIDTERM AND FINALS EXAM</b>
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div class="table-responsive">
                                <table className="table table-light table-hover">
                                  <thead>
                                    <tr>
                                      <th scope="col">ID</th>
                                      <th scope="col">LAST NAME</th>
                                      <th scope="col">NAME</th>

                                      <th scope="col">MIDTERM EXAM </th>
                                      <th scope="col">FINAL EXAM </th>
                                      <th scope="col">ADD POINTS</th>

                                      <th scope="col">REMARKS</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">23-00334</th>
                                      <td>Zoldick</td>
                                      <td>Killua</td>

                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>

                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-success">
                                        <strong>PASSED</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">23-00335</th>
                                      <td>Zoldick</td>
                                      <td>Illumi</td>

                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>

                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-danger">
                                        <strong>FAILED</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">23-00336</th>
                                      <td>Zoldick</td>
                                      <td>Illumi</td>

                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div class="input-group input-group-sm ">
                                          <input
                                            type="text"
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>

                                      <td className="text-warning">
                                        <div class="input-group input-group-sm ">
                                          <input
                                            class="form-control "
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                          />
                                        </div>
                                      </td>
                                      <td className="text-warning">
                                        <strong>INC</strong>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-3">
        {/* MIDTERM */}

        <div className="card text-bg-light mb-3 mt-3 mx-3">
          <div className="card-header">
            MIDTERM GRADES
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
              onClick={toggleGradesVisibility}
              className="btn btn-primary mb-3"
            >
              {isGradesVisible ? "Hide Grades Table" : "Show Grades Table"}
            </button>
            {isGradesVisible && (
              <div className="table-responsive">
                <table className="table table-light table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">LAST NAME</th>
                      <th scope="col">NAME</th>
                      <th scope="col">SECTION</th>
                      <th scope="col">QUIZ</th>
                      <th scope="col">CHAP.TEST</th>
                      <th scope="col">RECITATION</th>
                      <th scope="col">MIDTERM EXAM</th>
                      <th scope="col">MIDTERM GRADES</th>
                      <th scope="col">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">23-00334</th>
                      <td>Zoldick</td>
                      <td>Killua</td>
                      <td>Bsit-3D-SD</td>
                      <td>20</td>
                      <td>35</td>
                      <td>90</td>
                      <td>45</td>
                      <td>90.65</td>
                      <td className="text-success">
                        <strong>PASSED</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">23-00335</th>
                      <td>Zoldick</td>
                      <td>Illumi</td>
                      <td>Bsit-3D-SD</td>
                      <td>20</td>
                      <td>35</td>
                      <td>90</td>
                      <td>45</td>

                      <td className="text-danger">74.99</td>
                      <td className="text-danger">
                        <strong>FAILED</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">23-00336</th>
                      <td>Zoldick</td>
                      <td>Illumi</td>
                      <td>Bsit-3D-SD</td>
                      <td></td>
                      <td>35</td>
                      <td></td>
                      <td>45</td>

                      <td className="text-warning">70.99</td>
                      <td className="text-warning">
                        <strong>INC</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* FINALS */}
        <div className="card text-bg-light mb-3 mx-3">
          <div className="card-header">
            FINALS GRADES
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
              onClick={togglefGradesVisibility}
              className="btn btn-primary mb-3"
            >
              {isfGradesVisible ? "Hide Grades Table" : "Show Grades Table"}
            </button>
            {isfGradesVisible && (
              <div className="table-responsive">
                <table className="table table-light table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">LAST NAME</th>
                      <th scope="col">NAME</th>
                      <th scope="col">SECTION</th>
                      <th scope="col">QUIZ</th>
                      <th scope="col">CHAP.TEST</th>
                      <th scope="col">RECITATION</th>
                      <th scope="col">MIDTERM EXAM</th>
                      <th scope="col">MIDTERM GRADES</th>
                      <th scope="col">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">23-00334</th>
                      <td>Zoldick</td>
                      <td>Killua</td>
                      <td>Bsit-3D-SD</td>
                      <td>20</td>
                      <td>35</td>
                      <td>90</td>
                      <td>45</td>
                      <td>90.65</td>
                      <td className="text-success">
                        <strong>PASSED</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">23-00335</th>
                      <td>Zoldick</td>
                      <td>Illumi</td>
                      <td>Bsit-3D-SD</td>
                      <td>20</td>
                      <td>35</td>
                      <td>90</td>
                      <td>45</td>

                      <td className="text-danger">74.99</td>
                      <td className="text-danger">
                        <strong>FAILED</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">23-00336</th>
                      <td>Zoldick</td>
                      <td>Illumi</td>
                      <td>Bsit-3D-SD</td>
                      <td></td>
                      <td>35</td>
                      <td></td>
                      <td>45</td>

                      <td className="text-warning">70.99</td>
                      <td className="text-warning">
                        <strong>INC</strong>
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

export default Grades;
