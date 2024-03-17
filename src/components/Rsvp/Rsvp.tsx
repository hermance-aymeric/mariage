import React from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.png";
import FadeInAnimation from "../FadeInAnimation.tsx";
import Ivy from "../Ivy.tsx";

const Rsvp: React.FC = () => {
  return (
    <Content>
      <FadeInAnimation>
        <Ivy />
      </FadeInAnimation>
      <FadeInAnimation>
        <Title>Vous pouvez venir?</Title>
      </FadeInAnimation>
      <FadeInAnimation>
        <Text>Faites le nous savoir !</Text>
      </FadeInAnimation>
      <FadeInAnimation>
        <Text>
          Par email :{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href="mailto:hermance.aymeric@gmail.com"
          >
            hermance.aymeric@gmail.com
          </Link>
        </Text>
      </FadeInAnimation>
      <FadeInAnimation>
        <Text>
          Par voie postale :{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/dir//28+Rue+Parmentier,+92800+Puteaux,+France/@48.8787879,2.1975385,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e6651f59916adb:0x29b9502f22faac97!2m2!1d2.2387379!2d48.8787388?entry=ttu"
          >
            28 rue Parmentier 92800 Puteaux
          </Link>
        </Text>
      </FadeInAnimation>
      <FadeInAnimation>
        <Text>
          Par téléphone :{" "}
          <Link target="_blank" rel="noreferrer" href="tel:0603687886">
            06 03 68 78 86
          </Link>
        </Text>
      </FadeInAnimation>
      <Separator />
      <FadeInAnimation>
        <Title>Vous avez des allergies, des préférences alimentaires?</Title>
      </FadeInAnimation>
      <FadeInAnimation>
        <Text>Faites le nous savoir également!</Text>
      </FadeInAnimation>
      <FadeInAnimation>
        <Container>
          <Image src={logo} alt="logo" />
        </Container>
      </FadeInAnimation>
    </Content>
  );
};
const Image = styled.img`
  width: 80%;
  max-width: 300px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
const Content = styled.div`
  margin: auto;
  margin-top: 8rem;
  text-align: center;
  padding: 10px 10px 25px 10px;
  @media (min-width: 1024px) {
    width: 60%;
  }
`;
const Separator = styled.div`
  margin-top: 15px;
  height: 25px;
`;
const Title = styled.h1`
  font-family: Apple Chancery, cursive;
  margin-top: 15px;
  margin-bottom: 25px;
  color: #87a15b;
`;
const Text = styled.div`
  margin-bottom: 15px;
  @media (max-width: 1024px) {
    margin-bottom: 5px;
  }
`;
const Link = styled.a`
  color: #87a15b;
`;

export default Rsvp;
