import React from "react";
import Logo from "../../assets/Logo KM.png";

export const DaftarPengajuan = () => {
  return (
    <main class="container" id="register">
      <div class="register-card mt-5">
        <form>
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
            />
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1" class="mb-2">
              Fakultas
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1" class="mb-2">
              Jurusan
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-4 w-100">
            Daftar
          </button>
        </form>
      </div>
    </main>
  );
};
