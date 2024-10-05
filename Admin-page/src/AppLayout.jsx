import React from "react";
import Navbar from "./ui/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./ui/Footer";
import Sidebar from "./ui/Sidebar";
import { GetAllProducts } from "./Services/apiProducts";
import { useAdminContext } from "./context/Admin.context";
import ScrollToTop from "./ui/ScrollToTop";

function AppLayout() {
  const { setAllproducts } = useAdminContext();
  const loadedData = useLoaderData();
  setAllproducts(loadedData);

  return (
    <div className="grid min-h-dvh w-full grid-rows-[auto_1fr] bg-gray-900 text-white">
      <Navbar />
      <div className="relative grid grid-cols-[auto_1fr]">
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

export async function loader() {
  let Allproducts = await GetAllProducts();
  // Add serianl No
  Allproducts = Allproducts.map((product, i) => ({ ...product, no: i + 1 }));
  return Allproducts;
}
export default AppLayout;
