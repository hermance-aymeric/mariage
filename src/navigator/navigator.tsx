import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home.tsx";
import Maps from "../components/Planning.tsx";
import Rsvp from "../pages/Rsvp.tsx";
import Gift from "../pages/Gift.tsx";
import Error from "../pages/404.tsx";

export const navigator = createBrowserRouter([
  {
    path: "/mariage/",
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "maps",
        element: <Maps />,
      },
      {
        path: "rsvp",
        element: <Rsvp />,
      },
      {
        path: "gift",
        element: <Gift />,
      },
    ],
  },
]);
