import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Profile from "./pages/Profile";
import Dashboard, { loader as dashboardLoader } from "./pages/Dashboard";

import { Toaster } from "react-hot-toast";
import ProductDetail from "./pages/ProductDetail";
import ProductUpload, {
  action as UploadProductAction,
} from "./features/product/ProductUpload";
import Login from "./pages/Login";
import Products, { loader as productLoader } from "./pages/Products";
import Orders, { loader as orderLoader } from "./pages/Orders";
import Reviews from "./pages/Reviews";
import ProductEditing, {
  action as EditProdcutAction,
} from "./pages/ProductEditing";
import OrderDetail, {
  action as updateStatusAction,
  loader as singleOrderLoader,
} from "./pages/OrderDetail";
import Users, { loader as allUsersLoader } from "./pages/Users";
import UserDetail, {
  action as updateRoleLoader,
  loader as singleUserLoader,
} from "./pages/UserDetail";
import Error from "./ui/Error";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
          loader: dashboardLoader,
        },
        { path: "/products", element: <Products />, loader: productLoader },
        {
          path: "/products/upload",
          element: <ProductUpload />,
          action: UploadProductAction,
        },
        {
          path: "/products/edit/:IdWithSlug",
          element: <ProductEditing />,
          action: EditProdcutAction,
        },
        { path: "/products/:IdWithSlug", element: <ProductDetail /> },
        { path: "/orders", element: <Orders />, loader: orderLoader },
        {
          path: "/orders/:orderId",
          element: <OrderDetail />,
          loader: singleOrderLoader,
          action: updateStatusAction,
        },
        { path: "/reviews", element: <Reviews /> },
        { path: "/profile", element: <Profile /> },
        { path: "/users", element: <Users />, loader: allUsersLoader },
        {
          path: "/users/:username",
          element: <UserDetail />,
          loader: singleUserLoader,
          action: updateRoleLoader,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
