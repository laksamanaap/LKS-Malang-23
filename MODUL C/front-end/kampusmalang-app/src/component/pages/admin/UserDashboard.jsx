import React from "react";

export const UserDashboard = () => {
  return (
    <div style={{ marginLeft: "250px", marginTop: "100px" }}>
      <table
        class="table table-striped table-users"
        style={{ maxWidth: "1000px", margin: "auto" }}
      >
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Tanggal Lahir</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>laksamana.arya1412@gmail.com</td>
            <td>14-12-05</td>
            <td className="d-flex flex-row gap-3">
              <div className="btn btn-primary">Read</div>
              <div className="btn btn-secondary">Update</div>
              <div className="btn btn-danger">Delete</div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>laksamana.arya1412@gmail.com</td>
            <td>14-12-05</td>
            <td className="d-flex flex-row gap-3">
              <div className="btn btn-primary">Read</div>
              <div className="btn btn-secondary">Update</div>
              <div className="btn btn-danger">Delete</div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>laksamana.arya1412@gmail.com</td>
            <td>14-12-05</td>
            <td className="d-flex flex-row gap-3">
              <div className="btn btn-primary">Read</div>
              <div className="btn btn-secondary">Update</div>
              <div className="btn btn-danger">Delete</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
