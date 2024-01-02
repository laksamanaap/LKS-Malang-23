import React, { useState, useEffect } from "react";
import client from "../../../utils/router";

export const CampusDashboard = () => {
  const [campusData, setCampusData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Try catch version
  const fetchCampusData = async () => {
    try {
      const response = await client.get("v1/show-all/campus");
      setCampusData(response.data);
    } catch (error) {
      console.error("Error fetching campus data:", error.message);
    }
  };

  useEffect(() => {
    fetchCampusData();
  }, []);

  const handleDeleteCampus = (id_campus) => {
    console.log(id_campus);

    const adminConfirm = window.confirm(
      `Are you sure to delete this campus with id ${id_campus}`
    );

    try {
      if (adminConfirm) {
        client
          .delete(`v2/delete-campus-soft/${id_campus}`)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(`Campus with ID ${id_campus} deleted successfully.`);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              console.error(`Failed to delete campus with ID ${id_campus}`);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(campusData);

  return (
    <>
      <div className="container">
        <div style={{ marginLeft: "200px", marginTop: "100px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 style={{ marginBottom: "20px" }}>Manage campus</h1>
            <a className="btn btn-primary" href="/admin/create-campus">
              Create
            </a>
          </div>
          <table
            className="table table-striped table-users mb-5"
            style={{ margin: "auto" }}
          >
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Campus Name</th>
                <th scope="col">Campus Type</th>
                <th scope="col">Accreditation</th>
                <th scope="col">Website</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {campusData.map((campus, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{campus.name}</td>
                  <td>{campus.type}</td>
                  <td>{campus.accreditation}</td>
                  <td>{campus.website}</td>
                  <td>{campus.email}</td>

                  <td className="d-flex flex-row gap-3">
                    <a
                      href={`/admin/read-campus/${campus?.id_campus}`}
                      className="btn btn-primary"
                    >
                      Read
                    </a>
                    <a
                      href={`/admin/update-campus/${campus?.id_campus}`}
                      className="btn btn-secondary"
                    >
                      Update
                    </a>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteCampus(campus?.id_campus)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
