import React, { useEffect, useState } from "react";
import { UseNavigate, Outlet, Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo KM.png";

export const AdminSkin = () => {
  const navigate = useNavigate();

  const userRole = localStorage.getItem("role");

  useEffect(() => {
    if (userRole != "admin") {
      navigate("/");
    }
  }, [userRole]);

  return (
    <>
      <header>
        <nav
          id="sidebarMenu"
          class="collapse d-lg-block sidebar collapse bg-white"
        >
          <div class="position-sticky overflow-auto">
            <div class=" list-group align-items-center list-group-flush mx-3 mt-4 gap-2">
              <a class="navbar-brand mb-4" href="#">
                <img src={Logo} height="35" alt="MDB Logo" loading="lazy" />
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Main Dashboard</span>
              </a>
              <a
                href="/admin/student"
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Student Dashboard</span>
              </a>
              <a
                href="/admin/member"
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Member Dashboard</span>
              </a>
              <a
                href="/admin/campus"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-area fa-fw me-3"></i>
                <span>Campus Dashboard</span>
              </a>
              <a
                href="/admin/campus-validation"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-line fa-fw me-3"></i>
                <span>Campus Validation </span>
              </a>
              <a
                href="/admin/faculty"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-area fa-fw me-3"></i>
                <span>Faculty Dashboard</span>
              </a>
              <a
                href="/admin/majority"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-area fa-fw me-3"></i>
                <span>Majority Dashboard</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-users fa-fw me-3"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};
