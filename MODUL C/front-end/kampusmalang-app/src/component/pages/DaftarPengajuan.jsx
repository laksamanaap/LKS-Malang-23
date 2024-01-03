import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo KM.png";
import { useParams, useNavigate } from "react-router-dom";
import client from "../../utils/router";
import { computeHeadingLevel } from "@testing-library/react";

export const DaftarPengajuan = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [campusDetailData, setCampusDetailData] = useState({
    faculty: [],
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [selectedFaculty, setSelectedFaculty] = useState("");

  const token = localStorage.getItem("token");
  const id_users = localStorage.getItem("id_users");
  const first_name = localStorage.getItem("first_name");
  const last_name = localStorage.getItem("last_name");
  const tanggal_lahir = localStorage.getItem("tanggal_lahir");
  const email = localStorage.getItem("email");

  const { faculty } = campusDetailData;

  const fetchCampusDetail = async () => {
    try {
      const response = await client.get(`v2/show-campus/${id}`);
      console.log(response.data);
      setCampusDetailData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const storeValidation = async () => {
    try {
      const payload = {
        id_users: id_users,
        id_campus: id,
        id_faculty: selectedFaculty,
      };

      client
        .post("v1/store-campus-validation", payload)
        .then(({ data }) => {
          console.log(data);

          setSuccessMessage("Request data validation successfull");
          setTimeout(() => {
            navigate("/pengajuan");
          }, 3000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleFacultyChange = (e) => {
    console.log(e.target.value);
    setSelectedFaculty(e.target.value);
  };

  const handleSubmitValidation = (e) => {
    e.preventDefault();
    storeValidation();
  };

  useEffect(() => {
    fetchCampusDetail();
  }, [id]);

  return (
    <main class="container" id="register">
      <div class="register-card mt-5">
        <form onSubmit={handleSubmitValidation}>
          <img src={Logo} class="d-flex justify-content-center mb-5" alt="" />
          <div class="form-group mb-4">
            <label for="exampleInputEmail1" class="mb-2">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email ?? "-"}
            />
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1" class="mb-2">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={first_name ?? "-"}
            />
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1" class="mb-2">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={last_name ?? "-"}
            />
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1" class="mb-2">
              Tempat, Tanggal Lahir
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={tanggal_lahir ?? "-"}
            />
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1" class="mb-2">
              Fakultas
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedFaculty}
              onChange={handleFacultyChange}
            >
              <option value="" disabled>
                Pilih fakultas anda
              </option>
              {faculty.length > 0 ? (
                faculty.map((faculty, index) => (
                  <option key={index} value={faculty.id_faculty}>
                    {faculty.name}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  No faculty data
                </option>
              )}
            </select>
          </div>
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <button type="submit" class="btn btn-primary mt-4 w-100">
            Daftar
          </button>
        </form>
      </div>
    </main>
  );
};
