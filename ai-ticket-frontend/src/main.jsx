import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Tickets from "./pages/tickets.jsx";
import Ticket from "./pages/ticket.jsx";
import Login from "./pages/login.jsx";
import Admin from "./pages/admin.jsx";
import Signup from "./pages/signup.jsx";
import CheckAuth from "./components/check-auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CheckAuth protected={true}>
        <Tickets />
      </CheckAuth>
    ),
  },
  {
    path: "/tickets/:id",
    element: (
      <CheckAuth protected={true}>
        <Ticket />
      </CheckAuth>
    ),
  },
  {
    path: "/login",
    element: (
      <CheckAuth protected={false}>
        <Login />
      </CheckAuth>
    ),
  },
  {
    path: "/signup",
    element: (
      <CheckAuth protected={false}>
        <Signup />
      </CheckAuth>
    ),
  },
  {
    path: "/admin",
    element: (
      <CheckAuth protected={true}>
        <Admin />
      </CheckAuth>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
