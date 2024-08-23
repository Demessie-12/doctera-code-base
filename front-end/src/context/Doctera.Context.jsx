import { createContext, useContext, useState } from "react";

export const DocteraContext = createContext(null);

export const useDocteraContext = () => useContext(DocteraContext);

const DocteraContextProvider = (props) => {
  const [sideBar, setSideBar] = useState(false);
  const [allproducts, setAllproducts] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("logged-user")) || null
  );

  const contextValue = {
    allproducts,
    setAllproducts,
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
