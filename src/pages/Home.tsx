import React from "react";
import Header from "../components/Header.tsx";
import { ActiveNavItem } from "../type.ts";
import FluidImage from "../components/FluidImage.tsx";
import sunset from "./../assets/sunset-black-and-white.JPEG"
import Countdown from "../components/Countdown/Countdown.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Home}/>
      <FluidImage src={sunset}/>
      <Countdown/>
    </>
  );
};

export default Home;
