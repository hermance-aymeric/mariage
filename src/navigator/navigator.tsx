import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home.tsx";
import Maps from "../components/Planning/Planning.tsx";
import Rsvp from "../components/Rsvp/Rsvp.tsx";
import Gift from "../components/Gift/Gift.tsx";
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
