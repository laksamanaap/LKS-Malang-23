import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../../../utils/router";

export const UpdateMajority = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  // Message
  const [majoritySuccess, setMajoritySuccess] = useState("");
  const [majorityError, setMajorityError] = useState("");

  const [majorityDetailData, setMajorityDetailData] = useState([]);

  // Fetch majority detail data
  const fetchMajorityDetailData = async () => {
    try {
      const response = await client.get(`v2/show-majority/${id}`);
      setMajorityDetailData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle change input
  const handleFileInputChange = (e) => {
    const { name, value } = e.target;
    setMajorityDetailData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle update
  const handleUpdateMajority = async (e) => {
    e.preventDefault();

    try {
      const { type, name, description } = majorityDetailData;

      const payload = {
        id_campus: majorityDetailData?.id_campus,
        type: type,
        name: name,
        description: description,
      };

      const response = await client.put(`v2/update-majority/${id}`, payload);
      console.log(response);
      setMajoritySuccess(`Success update majority with id ${id}`);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      console.log(err?.response);
    }
  };

  useEffect(() => {
    fetchMajorityDetailData();
  }, [id]);

  const { type, name, description } = majorityDetailData;

  console.log(majorityDetailData);

  return (
    <div className="container">
      <div style={{ marginLeft: "200px", marginTop: "100px" }}>
        <div className="d-flex align-items-center justify-content-between">
          <h1 style={{ marginBottom: "20px" }}>Update Majority id {id}</h1>
        </div>
        <div className="container admin-read mb-4">
          <form onSubmit={handleUpdateMajority}>
            <div className="form-group mt-4">
              <label className="mb-2">Type</label>
              <input
                type="text"
                name="type"
                className="form-control"
                defaultValue={type}
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                defaultValue={name}
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                defaultValue={description}
                onChange={handleFileInputChange}
              />
            </div>

            {majoritySuccess && (
              <div className="alert alert-success mt-3">{majoritySuccess}</div>
            )}

            <button className="btn btn-primary mt-4" type="submit">
              Update Majority
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
