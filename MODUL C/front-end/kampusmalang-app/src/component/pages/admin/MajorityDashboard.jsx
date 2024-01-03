import React, { useEffect, useState } from "react";
import { UseNavigate, Outlet, Link, useNavigate } from "react-router-dom";
import client from "../../../utils/router";

export const MajorityDashboard = () => {
  const [majorityData, setMajorityData] = useState([]);

  // Handle fetch majority data
  const fetchMajorityData = async () => {
    try {
      const response = await client.get("v1/show-all/majority");
      setMajorityData(response?.data);
    } catch (err) {}
  };

  // Handle delete majority
  const handleDeleteMajority = async (id_majority) => {
    console.log("Id Faculty : ", id_majority);

    const adminConfirm = window.confirm(
      `Are you sure to delete this campus with id ${id_majority}`
    );

    try {
      if (adminConfirm) {
        client
          .delete(`v2/delete-majority/${id_majority}`)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(
                `Faculty with ID ${id_majority} deleted successfully.`
              );
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              console.error(`Failed to delete faculty with ID ${id_majority}`);
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

  useEffect(() => {
    fetchMajorityData();
  }, []);

  console.log(majorityData);

  return (
    <>
      <div className="container">
        <div style={{ marginLeft: "200px", marginTop: "100px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 style={{ marginBottom: "20px" }}>Manage majority</h1>
            <a href="/admin/faculty" className="btn btn-primary">
              Create
            </a>
          </div>
          <table
            class="table table-striped table-users"
            style={{ margin: "auto" }}
          >
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Majority Name</th>
                <th scope="col">Faculty</th>
                <th scope="col">Campus</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {majorityData.length > 0 ? (
                majorityData.map((majority, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{majority.name}</td>
                    <td>{majority.faculty.name}</td>
                    <td>{majority.campus.name}</td>
                    <td className="d-flex flex-row gap-3">
                      <a
                        className="btn btn-secondary"
                        href={`/admin/update-majority/${majority.id_majority}`}
                      >
                        Update
                      </a>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          handleDeleteMajority(majority.id_majority)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    There's no data majority available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
