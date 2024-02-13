import React from "react";
import Header from "../components/Header.tsx";
import styled from "styled-components";
import { ActiveNavItem } from "../type.ts";
import GradientImage from "../components/GradientImage.tsx";
import sunset from "./../assets/sunset.webp";
import Countdown from "../components/Countdown.tsx";
import Maps from "./Maps.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Home} />
      <GradientImage src={sunset} />
      <Content id="home">
        <Signature>Hermance & Aymeric</Signature>
        <Container>
          <Countdown />
          <Text>14 Septembre 2024 | Église de Saint Denis d'Orques</Text>
        </Container>
      </Content>
      <Maps />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    top: 45%;
    left: 20%;
    font-size: 36px;
    width: 60%;
    font-weight: bold;
  }
`;

const Text = styled.div`
  text-align: center;
  font-family: Apple Chancery, cursive;
  color: #ffffff;
  text-shadow: #3a4049 2px 5px;
`;
const Signature = styled(Text)`
  font-family: Apple Chancery, cursive;
  font-weight: bold;
  color: #ffffff;
  text-shadow: #3a4049 2px 5px;
  font-size: 66px;
`;
export default Home;
