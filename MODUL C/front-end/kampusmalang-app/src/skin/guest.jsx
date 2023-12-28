import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../assets/Logo KM.png";

export const GuestSkin = () => {
  const navigate = useNavigate();

  // If token exists, user is logged in true
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");

    setIsLoggedIn(false);
  };

  const first_name = localStorage.getItem("first_name");

  return (
    <div>
      <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container">
          <a class="navbar-brand logo-container" href="/">
            <img src={Logo} alt="" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="#navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div class="d-flex align-items-center w-100 gap-5">
              <div class="d-flex w-100 gap-4">
                <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle d-lg-block d-md-block d-none"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <form
                  class="d-flex ms-auto position-relative w-100"
                  role="search"
                >
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Cari di KampusMalang.com"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-primary position-absolute end-0"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </button>
                </form>
                <ul class="d-flex gap-4 navbar-nav mb-2 mb-lg-0">
                  {isLoggedIn ? (
                    <>
                      <span class="button_right user" href="#">
                        {first_name}
                      </span>
                      <a
                        class="button__right btn btn-primary"
                        href="#"
                        onClick={handleLogout}
                      >
                        Logout
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        class="button__right btn btn-outline-primary"
                        href="/register"
                      >
                        Daftar
                      </a>
                      <a class="button__right btn btn-primary" href="/login">
                        Masuk
                      </a>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer id="footer">
        <div class="footer-wrapper">
          <div class="container d-flex justify-content-between">
            <div class="d-flex flex-column gap-3 footer-wrapper-left">
              <img src={Logo} width="130px" alt="" />
              <span class="footer-wrapper-left-text">
                Temukan lebih dari 100 rekomendasi kampus di Malang, lengkap
                dengan info jurusan sesuai minat dan bakat, biaya, hingga
                prospek karier
              </span>
            </div>
            <div class="d-flex flex-row gap-5">
              <div class="d-flex flex-column gap-3">
                <span class="footer-wrapper-right-title">Menu</span>
                <a href="" class="footer-wrapper-right-sub">
                  Info Kampus
                </a>
                <a href="" class="footer-wrapper-right-sub">
                  Info Jurusan
                </a>
                <a href="" class="footer-wrapper-right-sub">
                  Daftar Sekarang
                </a>
              </div>
              <div class="d-flex flex-column gap-3">
                <span class="footer-wrapper-right-title">Sosial Media</span>
                <a href="" target="_blank" class="footer-wrapper-right-sub">
                  Instagram
                </a>
                <a href="" target="_blank" class="footer-wrapper-right-sub">
                  Facebook
                </a>
                <a href="" target="_blank" class="footer-wrapper-right-sub">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div class="footer-bottom d-flex justify-content-center align-items-center flex-column gap-1 mb-4 mt-4">
            <span class="">
              KampusMalang<span class="card-text-dot">.</span>com
            </span>
            <span class="">
              © 2023 PT Sentra Vidya Utama<span class="card-text-dot">.</span>{" "}
              Hak cipta dilindungi Undang-Undang
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
