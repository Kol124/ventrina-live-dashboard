import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
// import Nier from "../pages/Nier";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Dashboard /> }],
    },
    {
      path: "*",
      children: [
        { path: "*", element: <Navigate to="/404" /> },
        { path: "404", element: <NotFound /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
