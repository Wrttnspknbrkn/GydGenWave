import { createBrowserRouter } from "react-router-dom";
import { AboutUs, AdvanceAutom, Ai_powerd, ErrorPage, Features, CustomerManagement, LeadManagement, Integration, LandingPage, Register, RnA } from "../pages";
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
      { path: "/customer-management", element: <CustomerManagement /> },
      { path: "/lead-management", element: <LeadManagement /> },
      { path: "/reports-and-analytics", element: <RnA /> },
      { path: "/intergration", element: <Integration /> },
      { path: "/ai-powered-features", element: <Ai_powerd /> },
      { path: "/advanced-automation", element: <AdvanceAutom /> },
    ],
  },
  { path: "/sign-up", element: <Register /> },
  { path: "*", element: <ErrorPage /> },
];

const router = createBrowserRouter(Router);

export default router;
