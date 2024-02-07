import React from "react";
import Header from "../components/Header.tsx";
import styled from "styled-components";
import { ActiveNavItem } from "../type.ts";
import FluidImage from "../components/FluidImage.tsx";
import sunset from "./../assets/sunset-black-and-white.JPEG";
import Countdown from "../components/Countdown/Countdown.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Home} />
      <FluidImage src={sunset} />
      <Countdown />
      <Text>
        Nous sommes très impatients de vous recevoir afin de célébrer avec vous
        notre mariage, le 14 Septembre 2024
      </Text>
      <Signature>Hermance & Aymeric</Signature>
    </>
  );
};

const Text = styled.div`
  margin-top: 50px;
  text-align: center;
  font-family: Apple Chancery, cursive;
  @media (max-width: 1024px) {
  }
`;
const Signature = styled(Text)`
  font-family: Apple Chancery, cursive;
  @media (max-width: 1024px) {
    color: #87a15b;
  }
  font-size: 28px;
`;
export default Home;
