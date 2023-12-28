import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../../../utils/router";

export const CreateCampus = () => {
  const navigate = useNavigate();

  // Message
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const [formData, setFormData] = useState({
    type: "",
    name: "",
    description: "",
    accreditation: "",
    website: "",
    email: "",
    biaya: "",
    phone: "",
  });

  // Destructure
  const {
    type,
    name,
    description,
    accreditation,
    website,
    email,
    biaya,
    phone,
  } = formData;

  const handleFileInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedImageFile(file);
  };

  const handleStoreCampus = async (e) => {
    e.preventDefault();

    try {
      const campusPayload = {
        type: type,
        name: name,
        description: description,
        accreditation: accreditation,
        website: website,
        email: email,
        biaya: biaya,
        phone: phone,
      };

      const response = await client.post("v2/store-campus", campusPayload);
      console.log(response);
      setSuccessMessage("Campus created succesfully!");
      setTimeout(() => {
        navigate("/admin/campus");
      }, 2000);
    } catch (err) {
      console.log(err);
      setErrorMessage(err?.response.data.error);
    }
  };

  console.log(formData);

  return (
    <div className="container">
      <div style={{ marginLeft: "200px", marginTop: "100px" }}>
        <div className="d-flex align-items-center justify-content-between">
          <h1 style={{ marginBottom: "20px" }}>Create campus</h1>
        </div>
        <div className="container admin-read mb-4">
          <form onSubmit={handleStoreCampus}>
            <div className="form-group mt-4">
              <label className="mb-2">Image</label>
              <input
                type="file"
                name="images"
                onChange={handleImageChange}
                className="form-control"
              />
              <div className="mt-3"></div>
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Type</label>
              <input
                type="text"
                className="form-control"
                value={type}
                name="type"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Description</label>
              <input
                type="text"
                name="description"
                value={description}
                className="form-control"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Accreditation</label>
              <input
                type="text"
                name="accreditation"
                value={accreditation}
                className="form-control"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Website</label>
              <input
                type="text"
                name="website"
                value={website}
                className="form-control"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Email</label>
              <input
                type="text"
                name="email"
                value={email}
                className="form-control"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Biaya</label>
              <input
                type="text"
                name="biaya"
                value={biaya}
                className="form-control"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={phone}
                className="form-control"
                onChange={handleFileInputChange}
              />
            </div>
            {successMessage && (
              <div className="alert alert-success mt-3">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}

            <button className="btn btn-primary mt-4" type="submit">
              Create Campus
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
