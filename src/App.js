import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Hoodies from "./pages/Hoodies";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/hoodies",
        element: <Hoodies />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
