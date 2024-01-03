import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "../../../utils/router";

export const StudentDashboard = () => {
  const [campusValidationData, setCampusValidationData] = useState([]);

  // Fetch campus validation
  const fetchCampusValidation = async () => {
    try {
      const response = await client.get("v1/show-accepted-campus-validation");
      setCampusValidationData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle Reject Student
  const handleRejectStudent = async (id_validation) => {
    console.log(id_validation);

    const adminConfirm = window.confirm(
      `Are you sure to reject student with id validation ${id_validation}`
    );

    if (adminConfirm) {
      const payload = {
        id: id_validation,
        status: 2,
      };

      try {
        const response = await client.put("v2/change-student-status", payload);
        console.log(response);

        setTimeout(() => {
          window.location.reload();
        }, 1000);

        alert("Student has been removed on campus validation dashboard!");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchCampusValidation();
  }, []);

  console.log(campusValidationData);

  return (
    <>
      <div className="container">
        <div style={{ marginLeft: "200px", marginTop: "100px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 style={{ marginBottom: "20px" }}>
              Manage student campus validation
            </h1>
          </div>
          <table
            class="table table-striped table-users"
            style={{ margin: "auto" }}
          >
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Email</th>
                <th scope="col">Campus</th>
                <th scope="col">Faculty</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {campusValidationData.length > 0 ? (
                campusValidationData.map((campusValidation, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{campusValidation.user.first_name}</td>
                    <td>{campusValidation.user.last_name}</td>
                    <td>{campusValidation.user.email}</td>
                    <td>{campusValidation.campus.name}</td>
                    <td>{campusValidation.faculty.name}</td>
                    <td className="">
                      {campusValidation.status === 0 && (
                        <span class="card-status info">Pending</span>
                      )}
                      {campusValidation.status === 1 && (
                        <span class="card-status success">Diterima</span>
                      )}
                      {campusValidation.status === 2 && (
                        <span class="card-status rejected">Ditolak</span>
                      )}
                    </td>
                    <td className="d-flex flex-row gap-3">
                      <a
                        className="btn btn-primary"
                        href={`/admin/read-student/${campusValidation.id}`}
                      >
                        Read
                      </a>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRejectStudent(campusValidation.id)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
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
