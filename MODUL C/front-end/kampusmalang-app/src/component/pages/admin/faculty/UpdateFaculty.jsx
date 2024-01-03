import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../../../utils/router";

export const UpdateFaculty = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // Message
  const [facultySuccess, setFacultySuccess] = useState("");
  const [facultyError, setFacultyError] = useState("");

  const [majoritySuccess, setMajoritySuccess] = useState("");
  const [majorityError, setMajorityError] = useState("");

  // Fetch Faculty Data
  const [facultyDetailData, setFacultyDetailData] = useState({});

  // Majority Data
  const [majorityData, setMajorityData] = useState({
    type: "",
    name: "",
    description: "",
  });

  // Handle fetch faculty data
  const fetchFacultyDetail = async () => {
    try {
      const response = await client.get(`v2/show-faculty/${id}`);
      setFacultyDetailData(response?.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle Faculty Change
  const handleFacultyChange = (e) => {
    const { name, value } = e.target;

    setFacultyDetailData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle Majority Change
  const handleMajorityChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setMajorityData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //  Update Faculty
  const handleUpdateFaculty = async (e) => {
    e.preventDefault();

    try {
      const { name, description } = facultyDetailData;

      const payload = {
        id_campus: facultyDetailData?.campus.id_campus,
        name: name,
        description: description,
      };

      const response = await client.put(`v2/update-faculty/${id}`, payload);
      console.log(response?.data);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      setFacultySuccess(`Success update faculty id ${id}`);
    } catch (err) {
      console.log(err?.response.data.error);
      setFacultyError(err?.response.data.error);
    }
  };

  // Store Majority
  const handleStoreMajority = async (e) => {
    e.preventDefault();

    const { type, name, description } = majorityData;

    const payload = {
      id_campus: facultyDetailData?.campus.id_campus,
      id_faculty: id,
      type: type,
      name: name,
      description: description,
    };

    try {
      const response = await client.post("v2/store-majority", payload);
      console.log(response);
      setMajoritySuccess(`Success store majority on faculty id ${id}`);
      setTimeout(() => {
        navigate("/admin/majority");
      }, 1000);
    } catch (err) {
      console.log(err?.response);
    }
  };

  useEffect(() => {
    fetchFacultyDetail();
  }, [id]);

  console.log(facultyDetailData);

  console.log(majorityData);

  return (
    <>
      <div className="container">
        <div style={{ marginLeft: "200px", marginTop: "100px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 style={{ marginBottom: "20px" }}>Update Faculty id {id}</h1>
          </div>
          <div className="container admin-read mb-4">
            <form onSubmit={handleUpdateFaculty}>
              <div className="form-group mt-4">
                <label className="mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={facultyDetailData.name}
                  onChange={handleFacultyChange}
                  name="name"
                  className="form-control"
                />
              </div>

              <div className="form-group mt-4">
                <label className="mb-2">Description</label>
                <input
                  type="text"
                  defaultValue={facultyDetailData.description}
                  onChange={handleFacultyChange}
                  name="description"
                  className="form-control"
                />
              </div>
              {facultySuccess && (
                <div className="alert alert-success mt-3">{facultySuccess}</div>
              )}

              {facultyError && (
                <div className="alert alert-danger mt-3">
                  {facultyError.name &&
                    Array.isArray(facultyError.name) &&
                    facultyError.name.length > 0 && (
                      <>
                        {facultyError.name.map((error, index) => (
                          <p key={index}>{error}</p>
                        ))}
                      </>
                    )}
                </div>
              )}

              {facultyError && (
                <div className="alert alert-danger mt-3">
                  {facultyError.description &&
                    Array.isArray(facultyError.description) &&
                    facultyError.description.length > 0 && (
                      <>
                        {facultyError.description.map((error, index) => (
                          <p key={index}>{error}</p>
                        ))}
                      </>
                    )}
                </div>
              )}

              <button className="btn btn-primary mt-4" type="submit">
                Update Faculty
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ marginLeft: "200px", marginTop: "100px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 style={{ marginBottom: "20px" }}>Store Majority</h1>
          </div>
          <div className="container admin-read mb-4">
            <form onSubmit={handleStoreMajority}>
              <div className="form-group mt-4">
                <label className="mb-2">Type</label>
                <input
                  type="text"
                  name="type"
                  className="form-control"
                  value={majorityData.type}
                  onChange={handleMajorityChange}
                />
              </div>

              <div className="form-group mt-4">
                <label className="mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={majorityData.name}
                  onChange={handleMajorityChange}
                />
              </div>

              <div className="form-group mt-4">
                <label className="mb-2">Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value={majorityData.description}
                  onChange={handleMajorityChange}
                />
              </div>

              {majoritySuccess && (
                <div className="alert alert-success mt-3">
                  {majoritySuccess}
                </div>
              )}

              <button className="btn btn-primary mt-4" type="submit">
                Store Majority
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
