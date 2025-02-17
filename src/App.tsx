import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout";
import Login from "./pages/login";
import Home from "./pages/home";
import TambahKehadiran from "./pages/Tambah_Kehadiran";
import Profile from "./pages/Profile";
import Pengaturan from "./pages/Pengaturan";
import Logout from "./pages/logout"; 
import Register from "./pages/Tambah_Kehadiran";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/tambah-kehadiran",
        element: <TambahKehadiran />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/pengaturan",
        element: <Pengaturan />,
      },
      {
        path: "/logout", 
        element: <Logout />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}