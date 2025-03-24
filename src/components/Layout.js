import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container-fluid mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
