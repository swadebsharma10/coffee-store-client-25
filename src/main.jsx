import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home.jsx";
import AddCoffee from "./Pages/AddCoffee.jsx";
import UpdateCoffee from "./Pages/UpdateCoffee.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Users from "./Pages/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`https://coffee-store-server-ivory-sigma.vercel.app/coffee`),
      },
      {
        path: "/reg",
        element: <Register />,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=> fetch(`https://coffee-store-server-ivory-sigma.vercel.app/users`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/update/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-ivory-sigma.vercel.app/coffee/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
