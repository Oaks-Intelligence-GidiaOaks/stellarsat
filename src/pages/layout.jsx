import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, ParticlesBackground } from "../components";

const Layout = () => {
  return (
    <div className=" bg-primary-500 text-white font-light font-poppins">
      <ParticlesBackground />
      <div className="z-30 min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
