import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <main className="container-fluid mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
