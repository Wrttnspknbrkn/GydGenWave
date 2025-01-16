import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage, LandingPage, Login } from "../pages";

const Router = [
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "/",
        exact: true,
        element: <></>,
      },
    ],
  },
  { path: "/landing", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <ErrorPage /> },
];

const router = createBrowserRouter(Router);

export default router;
