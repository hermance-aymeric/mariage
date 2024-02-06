import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home.tsx";
import Maps from "../pages/Maps.tsx";
import Rsvp from "../pages/Rsvp.tsx";
import Gift from "../pages/Gift.tsx";

export const navigator = createBrowserRouter([
  {
    path: "/mariage",
    element: <Home />,
  },
  {
    path: "/mariage/maps",
    element: <Maps />,
  },
  {
    path: "/mariage/rsvp",
    element: <Rsvp />,
  },
  {
    path: "/mariage/gift",
    element: <Gift />,
  },
]);
