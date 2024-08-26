import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DocteraContextProvider from "./context/Doctera.Context.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import NavbarContextProvider from "./context/Navbar.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavbarContextProvider>
        <App />
      </NavbarContextProvider>
    </Provider>
  </React.StrictMode>
);
