import React from "react";
import Header from "../components/Header.tsx";
import { ActiveNavItem } from "../type.ts";

const Rsvp: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Rsvp}/>
      <div>RSVP</div>
    </>
  );
};

export default Rsvp;
