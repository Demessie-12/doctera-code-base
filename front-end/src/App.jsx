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
import { action as createOrderAction } from "./features/Order/CreateOrder.jsx";
import OrderItem from "./features/Order/OrderItem.jsx";
import OrderDetail, {
  loader as OrderLoader,
} from "./features/Order/OrderDetail.jsx";
import SearchResult from "./features/Search/SearchResult.jsx";
import { action as AddReviewAction } from "./features/Product/AddReview.jsx";
import Error from "./ui/Error.jsx";
import History from "./Pages/History.jsx";
import ProfileEdit, {
  action as profileEditAction,
} from "./Pages/ProfileEdit.jsx";
import PasswordEdit, {
  action as passwordEditAction,
} from "./Pages/PasswordEdit.jsx";
// import SearchResult from "./Pages/SearchResult.jsx";

library.add(faEye, faEyeSlash);

function App() {
  const { loggedUser } = useContext(NavbarContext);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      loader: MainLoader,
      errorElement: <Error />,
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
          action: AddReviewAction,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderId",
          element: <OrderDetail />,
          loader: OrderLoader,
        },
        {
          path: "/search/:searchName",
          element: <SearchResult />,
        },

        {
          path: "/profile",
          element: !loggedUser ? <Navigate to="/" /> : <Profile />,
        },
        {
          path: "/profile/edit",
          element: !loggedUser ? <Navigate to="/" /> : <ProfileEdit />,
          action: profileEditAction,
        },
        {
          path: "/password/edit",
          element: !loggedUser ? <Navigate to="/" /> : <PasswordEdit />,
          action: passwordEditAction,
        },
        {
          path: "/history",
          element: !loggedUser ? <Navigate to="/" /> : <History />,
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
