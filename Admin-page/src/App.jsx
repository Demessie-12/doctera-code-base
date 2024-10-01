import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Home from "../../front-end/src/Pages/Home";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Profile from "./pages/Profile";

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

  return <div></div>;
}

export default App;
