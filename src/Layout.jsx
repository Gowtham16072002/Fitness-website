import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import FooterAbove from "./FooterAbove";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <FooterAbove />
      <Footer />
    </>
  );
}

export default Layout;