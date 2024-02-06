import React from "react";
import Header from "../components/Header.tsx";
import { ActiveNavItem } from "../type.ts";


const Gift: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Gift}/>
      <div>Gift</div>
    </>
  );
};

export default Gift;
