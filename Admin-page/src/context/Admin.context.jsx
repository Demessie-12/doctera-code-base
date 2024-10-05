import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AdminContext = createContext(null);

export const useAdminContext = () => useContext(AdminContext);

const AdminContextProvider = (props) => {
  const [allproducts, setAllproducts] = useState([]);

  const contextValue = {
    allproducts,
    setAllproducts,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
