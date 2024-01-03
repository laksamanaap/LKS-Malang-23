import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "../../../utils/router";

export const MemberDashboard = () => {
  const [usersData, setUsersData] = useState([]);

  // Handle Fetching User Data
  const fetchUsersData = async () => {
    try {
      const response = await client.get("v2/show-all-users");
      setUsersData(response?.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle deactive user
  const handleDeactiveUser = async (id_users) => {
    const adminConfirm = window.confirm(
      `Are you sure want to deactive user with id ${id_users}`
    );

    if (adminConfirm) {
      try {
        const payload = {
          id: id_users,
          status: 0,
        };
        const response = await client.put("v2/change-member-status", payload);
        console.log(response);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Handle reactive user
  const handleReactiveUser = async (id_users) => {
    const adminConfirm = window.confirm(
      `Are you sure want to reactove user with id ${id_users}`
    );

    if (adminConfirm) {
      try {
        const payload = {
          id: id_users,
          status: 1,
        };
        const response = await client.put("v2/change-member-status", payload);
        console.log(response);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  console.log(usersData);

  return (
    <>
      <div className="container">
        <div style={{ marginLeft: "200px", marginTop: "100px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 style={{ marginBottom: "20px" }}>Manage members</h1>
            {/* <button className="btn btn-primary">Create</button> */}
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
                <th scope="col">Tanggal Lahir</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData.length > 0 ? (
                usersData.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.tanggal_lahir}</td>
                    <td>
                      {user.status === "0" && (
                        <span class="card-status rejected">Deactivated</span>
                      )}
                      {user.status === "1" && (
                        <span class="card-status success">Active</span>
                      )}
                    </td>
                    <td className="d-flex flex-row gap-3">
                      <a
                        className="btn btn-primary"
                        href={`/admin/read-member/${user.id_users}`}
                      >
                        Read
                      </a>
                      {user.status === "0" && (
                        <button
                          className="btn btn-primary"
                          onClick={() => handleReactiveUser(user.id_users)}
                        >
                          Reactive
                        </button>
                      )}
                      {user.status === "1" && (
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeactiveUser(user.id_users)}
                        >
                          Deactive
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    There's no data users available
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
