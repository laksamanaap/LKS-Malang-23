import React, { useState } from "react";
import Logo from "../../assets/Logo KM.png";
import { useNavigate } from "react-router-dom";
import client from "../../utils/router";

export const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFileInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { email, password } = formData;

  const fetchLogin = async () => {
    try {
      const { email, password } = formData;

      const payload = {
        email: email,
        password: password,
      };

      client
        .post("v1/login", payload)
        .then(({ data }) => {
          console.log(data);

          localStorage.setItem("token", data.tokens);
          localStorage.setItem("first_name", data.first_name);
          localStorage.setItem("last_name", data.last_name);
          localStorage.setItem("id_users", data.id_users);
          localStorage.setItem("tanggal_lahir", data.tanggal_lahir);
          localStorage.setItem("email", data.email);
          localStorage.setItem("role", data.role);

          setUserData(data);
          setSuccessMessage("Login Success");

          if (data.role === "admin") {
            navigate("/admin/campus");
          }

          if (data.role === "user") {
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        })
        .catch((err) => {
          console.error("Login failed:", err?.response.data.error);
          setErrorMessage(err?.response.data.error);
        });
    } catch (err) {
      console.log(err.message);
      setTimeout(() => {
        setErrorMessage(err.message);
      }, 2000);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchLogin();
  };

  return (
    <>
      <main class="container" id="register">
        <div class="register-card mt-5">
          <form onSubmit={handleLogin}>
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
            <div class="form-group">
              <label for="exampleInputPassword1" class="mb-2">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleFileInputChange}
              />
            </div>
            {errorMessage && (
              <div className="alert alert-danger mt-4">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="alert alert-success mt-4">{successMessage}</div>
            )}
            <button type="submit" class="btn btn-primary mt-4 w-100">
              Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
