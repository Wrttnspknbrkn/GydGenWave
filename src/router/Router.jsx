import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage, LandingPage, Register } from "../pages";

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
  { path: "/sign-up", element: <Register /> },
  { path: "*", element: <ErrorPage /> },
];

const router = createBrowserRouter(Router);

export default router;
