import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import Maps from "../pages/Maps";
import Rsvp from "../pages/Rsvp";
import Gift from "../pages/Gift";

export const navigator = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/maps",
    element: <Maps />,
  },
  {
    path: "/rsvp",
    element: <Rsvp />,
  },
  {
    path: "/gift",
    element: <Gift />,
  },
]);
