import { createBrowserRouter, Navigate } from "react-router";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Protected from "../features/auth/components/Protected";
import Dashboard from "../features/chat/pages/Dashboard";
import ForgetPassword from "../features/auth/components/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/dashboard",
    element: <Navigate to="/" replace/>
  },
  {
    path:"/forgetpassword",
    element:<ForgetPassword/>
  }
]);
