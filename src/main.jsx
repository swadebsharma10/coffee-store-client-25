import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main.jsx';
import Home from './Pages/Home.jsx';
import AddCoffee from './Pages/AddCoffee.jsx';
import UpdateCoffee from './Pages/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/addCoffee',
        element: <AddCoffee/>
      },
      {
        path: '/update',
        element: <UpdateCoffee/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
