import React, { useState } from "react";
import Logo from "../../assets/Logo KM.png";
import client from "../../utils/router";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    tanggal_lahir: "",
    password: "",
  });

  const handleFileInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const fetchRegister = async () => {
    try {
      // Destructure
      const { email, first_name, last_name, tanggal_lahir, password } =
        formData;

      const payload = {
        email: email,
        first_name: first_name,
        last_name: last_name,
        tanggal_lahir: tanggal_lahir,
        password: password,
      };

      // Try catch version
      try {
        await client.post("v1/register", payload);
        setSuccessMessage("Request data validation successful");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (err) {
        console.log(err);
        setErrorMessage(err?.response.data.error);

        setTimeout(() => {
          setErrorMessage(err?.response.data.error);
        }, 3000);
      }
    } catch (err) {
      console.log(err.message);
      setErrorMessage(err.message);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    fetchRegister();
  };

  const { email, first_name, last_name, tanggal_lahir, password } = formData;

  return (
    <>
      <main class="container" id="register">
        <div class="register-card mt-5">
          <form onSubmit={handleRegister}>
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
                name="email"
                value={email}
                onChange={handleFileInputChange}
              />
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputEmail2" class="mb-2">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="first_name"
                value={first_name}
                onChange={handleFileInputChange}
              />
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputEmail3" class="mb-2">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="last_name"
                value={last_name}
                onChange={handleFileInputChange}
              />
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputEmail4" class="mb-2">
                Tanggal Lahir
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail4"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="tanggal_lahir"
                value={tanggal_lahir}
                onChange={handleFileInputChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword5" class="mb-2">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword5"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleFileInputChange}
              />
            </div>
            <button type="submit" class="btn btn-primary mt-4 w-100">
              Daftar
            </button>
            {successMessage && (
              <div className="alert alert-success mt-4">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="alert alert-danger mt-4">{errorMessage}</div>
            )}
          </form>
        </div>
      </main>
    </>
  );
};
