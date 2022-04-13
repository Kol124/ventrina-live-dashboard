import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "*", element: <Navigate to="/404" /> },
        { path: "/", element: <Dashboard /> },
        { path: "404", element: <NotFound /> },
      ],
    },
  ]);
}
