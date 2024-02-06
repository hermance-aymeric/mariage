import React from "react";
import Header from "../components/Header.tsx";
import { ActiveNavItem } from "../type.ts";

const Maps: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Maps}/>
      <div>MAPS</div>
    </>
  );
};

export default Maps;
