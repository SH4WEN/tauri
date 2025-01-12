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
          <div class="card text-bg-light mb-3 mx-3">
            <div class="card-header">
              STUDENT'S
              <button type="button" class="btn btn-success float-end">
                <i class="bi bi-printer"></i>
              </button>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-light table-hover">
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
                      <td>WEB AND GAME</td>
                      <td>Zoldick</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-primary me-2"
                        >
                          UPDATE
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-danger"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionView;
