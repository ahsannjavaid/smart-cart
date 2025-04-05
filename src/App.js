import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Hoodies from "./pages/Hoodies";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Mugs from "./pages/Mugs";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import Stickers from "./pages/Stickers";
import TShirts from "./pages/TShirts.";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/admin/AddProduct";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/Login";
import ShowAllOrders from "./pages/admin/ShowAllOrders";
import ShowAllProducts from "./pages/admin/ShowAllProducts";
import UpdateUser from "./pages/admin/UpdateUser";
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
      },
      {
        path: "/mugs",
        element: <Mugs />,
      },
      {
        path: "/myaccount",
        element: <MyAccount />,
      },
      {
        path: "/order",
        element: <MyOrder />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/stickers",
        element: <Stickers />,
      },
      {
        path: "/tshirts",
        element: <TShirts />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/admin/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/admin/admindashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin",
        element: <AdminLogin />,
      },
      {
        path: "/admin/showallorders",
        element: <ShowAllOrders />,
      },
      {
        path: "/admin/showallproducts",
        element: <ShowAllProducts />,
      },
      {
        path: "/admin/updateuser",
        element: <UpdateUser />,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
