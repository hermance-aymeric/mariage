import React from "react";
import Header from "../components/Header.tsx";
import { ActiveNavItem } from "../type.ts";

const Home: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Home}/>
      <div>HOME</div>
    </>
  );
};

export default Home;
