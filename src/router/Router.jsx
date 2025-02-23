import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, LandingPage, Register } from "../pages";
import AboutUs from "../pages/aboutUs/aboutUs";
import Features from "../pages/features/features";
import LandingLayout from "../Layouts/LandingLayout";

const Router = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/landing", element: <LandingPage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/features", element: <Features /> },
    ],
  },
  { path: "/sign-up", element: <Register /> },
  { path: "*", element: <ErrorPage /> },
];

const router = createBrowserRouter(Router);

export default router;
