import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className='px-10'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
