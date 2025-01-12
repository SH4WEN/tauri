import React from "react";

function SectionView() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div class="card text-bg-secondary mb-3">
        <div class="card-body">
          <h5 class="card-title">
            <b>TrackEd</b>
          </h5>
          <hr />
          <div className="card text-bg-light mb-3 mx-3">
            <div className="card-header">
              STUDENT'S
              <button type="button" className="btn btn-success float-end">
                <i className="bi bi-printer"></i>
              </button>
            </div>
            <div className="card-body">
              <table className="table table-light table-hover">
                <thead>
                  <tr>
                    <th scope="col">SECTION CODE</th>
                    <th scope="col">MAJOR</th>
                    <th scope="col">ADVISER</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">BSIT 3A</th>
                    <th scope="row">WEB AND GAME</th>
                    <td>Zoldick</td>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionView;
