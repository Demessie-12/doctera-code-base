import React from "react";
import { useAdminContext } from "../context/Admin.context";
import { useLoaderData } from "react-router-dom";
import { GetDashboardDataHook } from "../Services/apiDashboard";

function Dashboard() {
  const { dashboardData, setDashboardData } = useAdminContext();
  const loadedData = useLoaderData();
  setDashboardData(loadedData);
  const { newOrders, newUsers, newProducts } = dashboardData;
  return (
    <div>
      <div className="bg-DocOrange/50">
        <h1 className="flex justify-center pt-5 text-lg font-bold lg:text-xl">
          This Week
        </h1>
        <div className="mb-5 grid grid-cols-1 gap-5 px-4 py-3 sm:grid-cols-3 lg:py-5">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16"
          >
            <p className="text-2xl font-extrabold text-DocOrange">
              {newOrders.length}
            </p>
            <p className="font-semibold text-gray-300">New Orders</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16"
          >
            <p className="text-2xl font-extrabold text-DocOrange">
              {newUsers.length}
            </p>
            <p className="font-semibold text-gray-300">New Users</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16"
          >
            <p className="text-2xl font-extrabold text-DocOrange">
              {newProducts.length}
            </p>
            <p className="font-semibold text-gray-300">New Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  let DashboradData = await GetDashboardDataHook();

  return DashboradData;
}
export default Dashboard;
