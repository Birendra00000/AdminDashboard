import { RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import Users from "./Pages/Users/Users";
import Products from "./Pages/Products/Products";
import Menu from "./Components/Menu/Menu";
import { createBrowserRouter, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";

function App() {
  const LayOut = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="main--container">
          <div className="menu--wrapper">
            <Menu />
          </div>
          <div className="page--wrapper">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
