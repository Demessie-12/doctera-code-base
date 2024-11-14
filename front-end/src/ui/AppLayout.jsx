import React from "react";
import NavBar from "./Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import { GetAllProducts } from "../Services/apiProducts";
import Sidebar from "./Sidebar";
import DocteraContextProvider from "../context/Doctera.Context";
import secureLocalStorage from "react-secure-storage";
import { useNavbarContext } from "../context/Navbar.context";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import Loader from "./Loader";

function AppLayout() {
  const { sideBar, setSideBar } = useNavbarContext();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  Math.round(
    (Date.now() - secureLocalStorage.getItem("lastTime")) / (1000 * 60),
  ) > 20 &&
    setTimeout(() => {
      location.reload();
    }, 5000);

  return (
    <DocteraContextProvider>
      {isLoading && <Loader />}
      <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] bg-DocBlue">
        {sideBar && <Sidebar />}
        <NavBar />
        <div className="">
          <Outlet />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </DocteraContextProvider>
  );
}

export async function loader() {
  if (
    secureLocalStorage.getItem("lastTime") &&
    Math.round(
      (Date.now() - secureLocalStorage.getItem("lastTime")) / (1000 * 60),
    ) < 20
  ) {
    // console.log("updated");
    return secureLocalStorage.getItem("products");
  }
  const AllProducts = await GetAllProducts();
  return AllProducts;
}

export default AppLayout;
