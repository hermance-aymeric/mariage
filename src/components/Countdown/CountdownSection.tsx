import React from "react";
import styled from "styled-components";
import Countdown from "./Countdown.tsx";
import OutlineButton from "../OutilineButton.tsx";
import FadeInAnimation from "../FadeInAnimation.tsx";

const CountdownSection = () => {
  return (
    <>
      <FadeInAnimation>
        <Signature>Hermance & Aymeric</Signature>
        <Container>
          <Countdown />
          <Text>14 Septembre 2024 | Église de Saint Denis d'Orques</Text>
          <ButtonContainer>
            <OutlineButton href="#rsvp" color={"white"}>
              {" "}
              RSVP{" "}
            </OutlineButton>
          </ButtonContainer>
        </Container>
      </FadeInAnimation>
    </>
  );
};

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const Text = styled.div`
  text-align: center;
  font-family: Apple Chancery, cursive;
  color: #ffffff;
  text-shadow: #3a4049 2px 2px;
`;

const Signature = styled(Text)`
  font-family: Apple Chancery, cursive;
  font-weight: bold;
  color: #ffffff;
  text-shadow: #3a4049 2px 2px;
  font-size: 66px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default CountdownSection;
