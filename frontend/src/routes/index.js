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
import VideoContent from "../pages/courseVideo/videoContent";
import Checkoutt from "../pages/onlinePayments/Checkoutt";
import ResetPassword from "../pages/ResetPassword";
import Success from "../pages/onlinePayments/Success";
import Failed from "../pages/onlinePayments/Failed";
import BookingConfirmedOnline from "../pages/BookingConfirmedOnline";
import BookingConfirmedOfflineB from "../pages/BookingConfirmedOfflineB";
import BookingConfirmedOfflineM from "../pages/BookingConfirmedOfflineM";

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
        path: "videoCourse",
        element: <VideoContent />,
      },
      {
        path: "onlineCoursePayment",
        element: <Checkoutt paymentType="onlineCoursePayment" amount="1250" />,
      },
      {
        path: "bookingConfirmedOnline",
        element: <BookingConfirmedOnline />,
      },
      {
        path: "offlineBCoursePayment",
        element: (
          <Checkoutt paymentType="offlineBCoursePayment" amount="2500" />
        ),
      },
      {
        path: "bookingConfirmedOfflineB",
        element: <BookingConfirmedOfflineB />,
      },
      {
        path: "offlineMCoursePayment",
        element: <Checkoutt paymentType="offlineMCoursePayment" amount="300" />,
      },
      {
        path: "bookingConfirmedOfflineM",
        element: <BookingConfirmedOfflineM />,
      },

      {
        path: "success",
        element: <Success />,
      },
      {
        path: "failed",
        element: <Failed />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "resetPassword/:token",
        element: <ResetPassword />,
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
