import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AdminContext = createContext(null);

export const useAdminContext = () => useContext(AdminContext);

const AdminContextProvider = (props) => {
  const [dashboardData, setDashboardData] = useState([]);
  const [allproducts, setAllproducts] = useState([]);
  const [allorders, setAllorders] = useState([]);
  const [allusers, setAllusers] = useState([]);

  const contextValue = {
    allproducts,
    setAllproducts,
    allorders,
    setAllorders,
    allusers,
    setAllusers,
    dashboardData,
    setDashboardData,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
