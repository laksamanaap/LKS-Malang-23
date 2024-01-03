import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../../utils/router";

export const FacultyDashboard = () => {
  const [facultyData, setFacultyData] = useState([]);

  // Handle fetch faculty data
  const fetchFacultyData = async () => {
    try {
      const response = await client.get("v2/show-all-faculty");
      // console.log(response?.data.data);
      setFacultyData(response?.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle delete faculty
  const handleDeleteFaculty = async (id_faculty) => {
    console.log("Id Faculty : ", id_faculty);

    const adminConfirm = window.confirm(
      `Are you sure to delete this campus with id ${id_faculty}`
    );

    try {
      if (adminConfirm) {
        client
          .delete(`v2/delete-faculty/${id_faculty}`)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(
                `Faculty with ID ${id_faculty} deleted successfully.`
              );
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              console.error(`Failed to delete faculty with ID ${id_faculty}`);
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
    fetchFacultyData();
  }, []);

  console.log(facultyData);

  return (
    <>
      <div className="container">
        <div style={{ marginLeft: "200px", marginTop: "100px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 style={{ marginBottom: "20px" }}>Manage faculty</h1>
            <a href="/admin/campus" className="btn btn-primary">
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
                <th scope="col">Faculty name</th>
                <th scope="col">Campus</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {facultyData.length > 0 ? (
                facultyData.map((faculty, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{faculty.name}</td>
                    <td>{faculty.campus.name}</td>
                    <td className="d-flex flex-row gap-3">
                      <a
                        className="btn btn-secondary"
                        href={`/admin/update-faculty/${faculty.id_faculty}`}
                      >
                        Update
                      </a>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteFaculty(faculty.id_faculty)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    There's no faculty campus available
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
