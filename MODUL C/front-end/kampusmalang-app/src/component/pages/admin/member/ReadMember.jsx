import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "../../../../utils/router";

export const ReadMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userDetailData, setUserDetailData] = useState({});

  const fetchUsersDetailData = async (e) => {
    try {
      const response = await client.get(`v2/show-user/${id}`);
      setUserDetailData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsersDetailData();
  }, []);

  console.log(userDetailData);

  return (
    <div className="container">
      <div style={{ marginLeft: "200px", marginTop: "100px" }}>
        <div className="d-flex align-items-center justify-content-between">
          <h1 style={{ marginBottom: "20px" }}>Read Member id {id}</h1>
        </div>
        <div className="container admin-read mb-4">
          {userDetailData.status === "0" && (
            <div className="col-md-1">
              <span class="card-status rejected">Deactivated</span>
            </div>
          )}
          {userDetailData.status === "1" && (
            <div className="col-md-1">
              <span class="card-status success">Active</span>
            </div>
          )}
          <form>
            <div className="form-group mt-4">
              <label className="mb-2">First Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={userDetailData?.first_name}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Last Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={userDetailData?.last_name}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Tanggal Lahir</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={userDetailData?.tanggal_lahir}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Email</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={userDetailData?.email}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Role</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={userDetailData?.role}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
