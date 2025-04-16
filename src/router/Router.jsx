import { createBrowserRouter } from "react-router-dom";
import {
  AboutUs,
  AdvanceAutom,
  Ai_powerd,
  ErrorPage,
  Features,
  CustomerManagement,
  LeadManagement,
  SalesPipeline,
  TaskAutomation,
  CustomerSupport,
  MarketingAutomation,
  Integration,
  LandingPage,
  Register,
  RnA,
  SubscriptionPlan,
} from "../pages";
import LandingLayout from "../Layouts/LandingLayout";
import SignInPage from "../pages/authentication/SignIn";
import SignUpPage from "../pages/authentication/SignUp";
import FreeTrialPage from "../pages/authentication/FreeTrial";
import FreeDemoPage from "../pages/authentication/FreeDemo";

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
      { path: "/sales-pipeline", element: <SalesPipeline /> },
      { path: "/subscription-plan", element: <SubscriptionPlan /> },
      { path: "/task-automation", element: <TaskAutomation /> },
      { path: "/customer-support", element: <CustomerSupport /> },
      { path: "/marketing", element: <MarketingAutomation /> },
      { path: "/reports-and-analytics", element: <RnA /> },
      { path: "/intergration", element: <Integration /> },
      { path: "/ai-powered-features", element: <Ai_powerd /> },
      { path: "/advanced-automation", element: <AdvanceAutom /> },
      { path: "/login", element: <SignInPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/free-trial", element: <FreeTrialPage /> },
      { path: "/free-demo", element: <FreeDemoPage /> },
    ],
  },
  { path: "/get-started", element: <Register /> },

  { path: "*", element: <ErrorPage /> },
];

const router = createBrowserRouter(Router);

export default router;
