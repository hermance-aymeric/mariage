import React from "react";
import styled from "styled-components";
import Countdown from "./Countdown.tsx";

const CountdownSection = () => {
  return (
    <>
      <Signature>Hermance & Aymeric</Signature>
      <Container>
        <Countdown />
        <Text>14 Septembre 2024 | Église de Saint Denis d'Orques</Text>
      </Container>
    </>
  );
};

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default CountdownSection;
