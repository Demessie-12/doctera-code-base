import React from "react";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import { GetAllProducts } from "../Services/apiProducts";
import Sidebar from "./Sidebar";
import DocteraContextProvider from "../context/Doctera.Context";
import secureLocalStorage from "react-secure-storage";
import { useNavbarContext } from "../context/Navbar.context";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

function AppLayout() {
  const { sideBar, setSideBar } = useNavbarContext();
  return (
    <DocteraContextProvider>
      <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
        {sideBar && <Sidebar />}
        <NavBar />
        <div className="px-2 sm:px-3 ">
          <Outlet />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </DocteraContextProvider>
  );
}

export async function loader() {
  if (secureLocalStorage.getItem("products")) {
    return secureLocalStorage.getItem("products");
  }
  const AllProducts = await GetAllProducts();
  return AllProducts;
}

export default AppLayout;
