import { createBrowserRouter } from "react-router-dom";
import { GuestSkin } from "../skin/guest";
import { GuardSkin } from "../skin/guard";
import { AdminSkin } from "../skin/admin";
import { Login } from "../component/pages/Login";
import { Register } from "../component/pages/Register";
import { Index } from "../component/pages/Index";
import { Detail } from "../component/pages/Detail";
import { DetailMajority } from "../component/pages/DetailMajority";
import { Pengajuan } from "../component/pages/Pengajuan";
import { DaftarPengajuan } from "../component/pages/DaftarPengajuan";
import { AllCampus } from "../component/pages/AllCampus";
import { AllMajority } from "../component/pages/AllMajority";

import { UserDashboard } from "../component/pages/admin/UserDashboard";
import { MemberDashboard } from "../component/pages/admin/MemberDashboard";
import { MajorityDashboard } from "../component/pages/admin/MajorityDashboard";
import { FacultyDashboard } from "../component/pages/admin/FacultyDashboard";
import { CampusDashboard } from "../component/pages/admin/CampusDashboard";
import { CampusValidation } from "../component/pages/admin/CampusValidation";

// CRUD Campus
import { CreateCampus } from "../component/pages/admin/campus/CreateCampus";
import { ReadCampus } from "../component/pages/admin/campus/ReadCampus";
import { UpdateCampus } from "../component/pages/admin/campus/UpdateCampus";

// CRUD Faculty
import { UpdateFaculty } from "../component/pages/admin/faculty/UpdateFaculty";

// CRUD Majority
import { UpdateMajority } from "../component/pages/admin/majority/UpdateMajority";

// Student
import { StudentDashboard } from "../component/pages/admin/StudentDashboard";
import { ReadStudent } from "../component/pages/admin/student/ReadStudent";

// Member
import { ReadMember } from "../component/pages/admin/member/ReadMember";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <GuestSkin />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <GuestSkin />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestSkin />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
  {
    path: "/detail/:id",
    element: <GuestSkin />,
    children: [
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/detail-majority/:id",
    element: <GuestSkin />,
    children: [
      {
        path: "/detail-majority/:id",
        element: <DetailMajority />,
      },
    ],
  },
  {
    path: "/all-campus",
    element: <GuestSkin />,
    children: [
      {
        path: "/all-campus",
        element: <AllCampus />,
      },
    ],
  },
  {
    path: "/all-majority",
    element: <GuestSkin />,
    children: [
      {
        path: "/all-majority",
        element: <AllMajority />,
      },
    ],
  },
  // Guarded`
  {
    path: "/pengajuan",
    element: <GuardSkin />,
    children: [
      {
        path: "/pengajuan",
        element: <Pengajuan />,
      },
    ],
  },
  {
    path: "/daftar-pengajuan/:id",
    element: <GuardSkin />,
    children: [
      {
        path: "/daftar-pengajuan/:id",
        element: <DaftarPengajuan />,
      },
    ],
  },
  // Admin Student
  {
    path: "/admin/student",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/student",
        element: <StudentDashboard />,
      },
    ],
  },
  {
    path: "/admin/read-student/:id",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/read-student/:id",
        element: <ReadStudent />,
      },
    ],
  },
  // Admim Member
  {
    path: "/admin/member",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/member",
        element: <MemberDashboard />,
      },
    ],
  },
  {
    path: "/admin/read-member/:id",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/read-member/:id",
        element: <ReadMember />,
      },
    ],
  },
  // Campus
  {
    path: "/admin/campus",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/campus",
        element: <CampusDashboard />,
      },
    ],
  },
  // CRUD Campus
  {
    path: "/admin/create-campus",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/create-campus",
        element: <CreateCampus />,
      },
    ],
  },
  {
    path: "/admin/read-campus/:id",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/read-campus/:id",
        element: <ReadCampus />,
      },
    ],
  },
  {
    path: "/admin/update-campus/:id",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/update-campus/:id",
        element: <UpdateCampus />,
      },
    ],
  },
  // Campus Validation
  {
    path: "/admin/campus-validation",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/campus-validation",
        element: <CampusValidation />,
      },
    ],
  },
  // Campus Faculty
  {
    path: "/admin/faculty",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/faculty",
        element: <FacultyDashboard />,
      },
    ],
  },
  {
    path: "/admin/update-faculty/:id",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/update-faculty/:id",
        element: <UpdateFaculty />,
      },
    ],
  },
  // Campus Majority
  {
    path: "/admin/majority",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/majority",
        element: <MajorityDashboard />,
      },
    ],
  },
  {
    path: "/admin/update-majority/:id",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/update-majority/:id",
        element: <UpdateMajority />,
      },
    ],
  },
]);

export default routes;
