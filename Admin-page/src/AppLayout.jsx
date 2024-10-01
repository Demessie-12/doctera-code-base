import React from "react";
import Navbar from "./ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./ui/Footer";

function AppLayout() {
  return (
    <div className="w-full min-h-dvh grid grid-rows-[auto_1fr_auto] bg-gray-600">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
