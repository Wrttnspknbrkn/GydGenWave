import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage, LandingPage, Register } from "../pages";
import AboutUs from "../pages/aboutUs/aboutUs";

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
  { path: "/about-us", element: <AboutUs /> },
  { path: "*", element: <ErrorPage /> },
];

const router = createBrowserRouter(Router);

export default router;
