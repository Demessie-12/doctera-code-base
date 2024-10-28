import React from "react";
import Navbar from "./ui/Navbar";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Footer from "./ui/Footer";
import Sidebar from "./ui/Sidebar";
import ScrollToTop from "./ui/ScrollToTop";
import Loader from "./ui/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid min-h-dvh w-full grid-rows-[auto_1fr] bg-gray-900 text-white">
      {isLoading && <Loader />}
      <Navbar />
      <div className="relative grid-cols-[auto_1fr] md:grid">
        <div className="sticky top-0 max-h-dvh w-fit bg-gradient-to-r from-black via-black to-gray-900 text-gray-300 max-[768px]:hidden">
          <Sidebar />
        </div>
        <div>
          <Outlet />
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default AppLayout;
