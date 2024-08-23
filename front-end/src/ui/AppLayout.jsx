import React from "react";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import { GetAllProducts } from "../Services/apiProducts";
import Sidebar from "./Sidebar";
import { useDocteraContext } from "../context/Doctera.Context";

function AppLayout() {
  const { sideBar, setSideBar } = useDocteraContext();
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      {sideBar && <Sidebar />}
      <NavBar />
      <div className="px-2 sm:px-3 ">
        <Outlet />
      </div>
    </div>
  );
}

export async function loader() {
  if (localStorage.getItem("products")) return localStorage.getItem("products");
  const AllProducts = await GetAllProducts();
  return AllProducts;
}

export default AppLayout;
