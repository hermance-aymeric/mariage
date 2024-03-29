import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { navigator } from "./navigator/navigator.tsx";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={navigator} /> */}
    <Home />
  </React.StrictMode>
);
