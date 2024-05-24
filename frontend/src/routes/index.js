import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import Booking from "../pages/booking/Booking";
import Course from "../pages/course/Course";
import Shop from "../pages/shop/Shop";
import AllSlots from "../pages/AllSlots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-slots",
            element: <AllSlots />,
          },
        ],
      },
    ],
  },
]);

export default router;
