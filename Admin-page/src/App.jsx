import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout, { loader as mainLoader } from "./AppLayout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

import { Toaster } from "react-hot-toast";
import ProductDetail from "./pages/ProductDetail";
import ProductUpload from "./features/product/ProductUpload";
import ProductEditing from "./features/product/ProductEditing";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Reviews from "./pages/Reviews";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      element: <AppLayout />,
      loader: mainLoader,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        { path: "/products", element: <Products /> },
        { path: "/products/upload", element: <ProductUpload /> },
        { path: "/products/edit/:productId", element: <ProductEditing /> },
        { path: "/products/:IdWithSlug", element: <ProductDetail /> },
        { path: "/orders", element: <Orders /> },
        { path: "/reviews", element: <Reviews /> },
        { path: "/profile", element: <Profile /> },
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
