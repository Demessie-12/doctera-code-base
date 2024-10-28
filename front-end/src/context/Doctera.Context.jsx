import { createContext, useContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export const DocteraContext = createContext(null);

export const useDocteraContext = () => useContext(DocteraContext);

const DocteraContextProvider = (props) => {
  const [sideBar, setSideBar] = useState(false);
  const [allproducts, setAllproducts] = useState(
    secureLocalStorage.getItem("products"),
  );
  const [userOrders, setUserOrders] = useState(
    secureLocalStorage.getItem("orders"),
  );
  const [localOrders, setLocalOrders] = useState(
    secureLocalStorage.getItem("local-orders") || [],
  );
  const [loggedUser, setLoggedUser] = useState(
    secureLocalStorage.getItem("logged-user") || null,
  );

  const contextValue = {
    allproducts,
    setAllproducts,
    userOrders,
    setUserOrders,
    localOrders,
    setLocalOrders,
    loggedUser,
    setLoggedUser,
    sideBar,
    setSideBar,
  };

  return (
    <DocteraContext.Provider value={contextValue}>
      {props.children}
    </DocteraContext.Provider>
  );
};

export default DocteraContextProvider;
