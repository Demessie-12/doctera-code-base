import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppLayout, { loader as MainLoader } from "./ui/AppLayout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Category from "./Pages/Category.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import Order from "./Pages/Order.jsx";
import Search from "./Pages/Search.jsx";
import Profile from "./Pages/Profile.jsx";
import Admin from "./Pages/Admin.jsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import {
  DocteraContext,
  useDocteraContext,
} from "./context/Doctera.Context.jsx";
import CreateOrder from "./features/Order/CreateOrder.jsx";
import { NavbarContext } from "./context/Navbar.context.jsx";

library.add(faEye, faEyeSlash);

function App() {
  const { loggedUser } = useContext(NavbarContext);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      loader: MainLoader,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: loggedUser ? <Navigate to="/" /> : <Login />,
        },
        {
          path: "/signup",
          element: loggedUser ? <Navigate to="/" /> : <Signup />,
        },
        {
          path: "/c/:category",
          element: <Category />,
        },
        {
          path: "/product/:IdWithSlug",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
  ]);

  return (
    <div>
      {/* <NavBar /> */}
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
