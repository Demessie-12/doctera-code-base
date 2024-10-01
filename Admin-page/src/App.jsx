import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/products", element: <Product /> },
        { path: "/orders", element: <Order /> },
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
