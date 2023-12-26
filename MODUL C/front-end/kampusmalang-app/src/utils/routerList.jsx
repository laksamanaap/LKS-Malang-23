import { createBrowserRouter } from "react-router-dom";
import { GuestSkin } from "../skin/guest";
import { GuardSkin } from "../skin/guard";
import { Login } from "../component/pages/Login";
import { Register } from "../component/pages/Register";
import { Index } from "../component/pages/Index";
import { Detail } from "../component/pages/Detail";

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
]);

export default routes;
