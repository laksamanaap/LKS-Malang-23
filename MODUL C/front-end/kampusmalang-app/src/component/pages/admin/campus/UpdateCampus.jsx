import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../../../utils/router";
import placeholder from "../../../../assets/placeholder.png";

export const UpdateCampus = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // Message
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Campus Detail Data
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const [campusDetailData, setCampusDetailData] = useState({
    faculty: [],
    majority: [],
    image_campus: [],
  });

  const {
    id_campus,
    type,
    name,
    description,
    accreditation,
    website,
    email,
    biaya,
    phone,
    image_campus,
  } = campusDetailData;

  // Handle Update Campus
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Destructuring formData
    const {
      id_campus,
      type,
      name,
      description,
      accreditation,
      website,
      email,
      biaya,
      phone,
      image_campus,
    } = campusDetailData;

    const payload = {
      type: type,
      name: name,
      description: description,
      accreditation: accreditation,
      website: website,
      email: email,
      biaya: biaya,
      phone: String(phone),
    };

    const imagesPayload = new FormData();
    imagesPayload.append("id_images_campus", String(selectedImageId));
    imagesPayload.append("images", selectedImageFile);

    console.log(imagesPayload);

    try {
      const response = await client.put(`v2/update-campus/${id}`, payload);

      if (selectedImageFile) {
        const responseImage = await client.post(
          `v2/edit-campus-image`,
          imagesPayload
        );
        console.log(responseImage);
      }

      setSuccessMessage("Success Update Campus!");
      console.log(response);

      setTimeout(() => {
        navigate("/admin/campus");
      }, 1000);
    } catch (err) {
      console.error("Error updating campus data:", err);
      setErrorMessage(err?.response.data.error);
    }
  };

  // Handle Fetch campus detail
  const fetchCampusDetail = async () => {
    try {
      const response = await client.get(`v2/show-campus/${id}`);
      console.log(response.data);
      setCampusDetailData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Handle file input change
  const handleFileInputChange = (e) => {
    const { name, value } = e.target;
    setCampusDetailData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedImageFile(file);
  };

  // Handle Selected Image
  const handleSelectedImage = (id_image_campus) => {
    setSelectedImageId(id_image_campus);
  };

  const renderImages = () => {
    return campusDetailData?.image_campus.map((image) => (
      <div key={image.id_images_campus} className="image-item">
        <input
          type="checkbox"
          value={image.id_images_campus}
          onClick={() => handleSelectedImage(image.id_images_campus)}
        />
        <img
          src={image.icon}
          alt="Campus"
          style={{ maxWidth: "200px", margin: "5px" }}
        />
      </div>
    ));
  };

  useEffect(() => {
    fetchCampusDetail();
  }, [id]);

  console.log(campusDetailData);

  console.log("Selected Image ID : ", selectedImageId);

  console.log(selectedImageFile);

  return (
    <div className="container">
      <div style={{ marginLeft: "200px", marginTop: "100px" }}>
        <div className="d-flex align-items-center justify-content-between">
          <h1 style={{ marginBottom: "20px" }}>Update campus {name}</h1>
        </div>
        <div className="container admin-read mb-4">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group mt-4">
              <label className="mb-2">Image</label>
              <input
                type="file"
                name="images"
                onChange={handleImageChange}
                className="form-control"
              />
              <div className="mt-3">{renderImages()}</div>
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Type</label>
              <input
                type="text"
                name="type"
                value={type}
                onChange={handleFileInputChange}
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Name</label>
              <input
                type="text"
                defaultValue={name}
                onChange={handleFileInputChange}
                name="name"
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Description</label>
              <input
                type="text"
                defaultValue={description}
                onChange={handleFileInputChange}
                name="description"
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Accreditation</label>
              <input
                type="text"
                defaultValue={accreditation}
                onChange={handleFileInputChange}
                name="accreditation"
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Website</label>
              <input
                type="text"
                defaultValue={website}
                onChange={handleFileInputChange}
                name="website"
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Email</label>
              <input
                type="text"
                defaultValue={email}
                onChange={handleFileInputChange}
                name="email"
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Biaya</label>
              <input
                type="text"
                defaultValue={biaya}
                onChange={handleFileInputChange}
                name="biaya"
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label className="mb-2">Phone</label>
              <input
                type="text"
                defaultValue={phone}
                onChange={handleFileInputChange}
                name="phone"
                className="form-control"
              />
            </div>
            {successMessage && (
              <div className="alert alert-success mt-3">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}

            <button className="btn btn-primary mt-4" type="submit">
              Update Campus
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
