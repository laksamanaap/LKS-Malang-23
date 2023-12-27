import { createBrowserRouter } from "react-router-dom";
import { GuestSkin } from "../skin/guest";
import { GuardSkin } from "../skin/guard";
import { AdminSkin } from "../skin/admin";
import { Login } from "../component/pages/Login";
import { Register } from "../component/pages/Register";
import { Index } from "../component/pages/Index";
import { Detail } from "../component/pages/Detail";
import { Pengajuan } from "../component/pages/Pengajuan";
import { DaftarPengajuan } from "../component/pages/DaftarPengajuan";

import { UserDashboard } from "../component/pages/admin/UserDashboard";

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
    element: <GuardSkin />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
  {
    path: "/detail",
    element: <GuardSkin />,
    children: [
      {
        path: "/detail",
        element: <Detail />,
      },
    ],
  },
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
    path: "/daftar-pengajuan",
    element: <GuardSkin />,
    children: [
      {
        path: "/daftar-pengajuan",
        element: <DaftarPengajuan />,
      },
    ],
  },
  // Admin
  {
    path: "/admin/user",
    element: <AdminSkin />,
    children: [
      {
        path: "/admin/user",
        element: <UserDashboard />,
      },
    ],
  },
]);

export default routes;
