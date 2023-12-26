import React from "react";
import Logo from "../../assets/Logo KM.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container">
          <a className="navbar-brand logo-container" href="/">
            <img src={Logo} alt="" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="#navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="d-flex align-items-center w-100 gap-5">
              <div className="d-flex w-100 gap-4">
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle d-lg-block d-md-block d-none"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <form
                  className="d-flex ms-auto position-relative w-100"
                  role="search"
                >
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Cari di KampusMalang.com"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-primary position-absolute end-0"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </button>
                </form>
                <ul className="d-flex gap-4 navbar-nav mb-2 mb-lg-0">
                  <a
                    className="button__right btn btn-outline-primary"
                    href="register.html"
                  >
                    Daftar
                  </a>
                  <a
                    className="button__right btn btn-primary"
                    href="login.html"
                  >
                    Masuk
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
