import React from "react";
import Header from "../components/Header.tsx";
import styled from "styled-components";
import { ActiveNavItem } from "../type.ts";
import GradientImage from "../components/GradientImage.tsx";
import sunset from "./../assets/sunset-2.JPEG";
import Countdown from "../components/Countdown/Countdown.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Home} />
      <GradientImage src={sunset} />
      <Countdown />
      <Content>
        <Text>
          Nous sommes très impatients de vous recevoir afin de célébrer avec
          vous notre mariage, le 14 Septembre 2024 à 15h à l'église de Saint
          Denis d'Orques, 72350
        </Text>
        <Signature>Hermance & Aymeric</Signature>
      </Content>
    </>
  );
};

const Content = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    top: 45%;
    left: 20%;
    font-size: 26px;
    width: 60%;
  }
`;

const Text = styled.div`
  margin-top: 50px;
  text-align: center;
  font-family: Apple Chancery, cursive;
  @media (max-width: 1024px) {
  }
`;
const Signature = styled(Text)`
  font-family: Apple Chancery, cursive;
  color: #87a15b;
  font-size: 28px;
  margin-bottom: 30px;
`;
export default Home;
