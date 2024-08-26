import { createContext, useContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export const NavbarContext = createContext(null);

export const useNavbarContext = () => useContext(NavbarContext);

const NavbarContextProvider = (props) => {
  const [sideBar, setSideBar] = useState(false);
  const [loggedUser, setLoggedUser] = useState(
    secureLocalStorage.getItem("logged-user") || null
  );

  const contextValue = {
    sideBar,
    setSideBar,
    loggedUser,
    setLoggedUser,
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
