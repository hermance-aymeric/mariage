import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { Stack } from "react-bootstrap";
import FadeInAnimation from "../FadeInAnimation.tsx";

const Gift: React.FC = () => {
  return (
    <Stack direction="vertical" gap={3} className="text-center pt-5">
      <FadeInAnimation>
        <Title>
          Une{" "}
          <HeaderLink href="" target="_blank" rel="noreferrer">
            cagnotte
          </HeaderLink>{" "}
          pour...
        </Title>
      </FadeInAnimation>
      <FadeInAnimation>
        <Text>
          ... Un voyage de noce dans un petit chalet
          <br /> perdu dans la montagne
        </Text>
      </FadeInAnimation>
      <FadeInAnimation>
        <Text>... Des projets futurs</Text>
      </FadeInAnimation>
      <FadeInAnimation>... Notre vie à deux</FadeInAnimation>
      <FadeInAnimation>
        <Button variant="outline-success" size="lg">
          Cagnotte
        </Button>
      </FadeInAnimation>
    </Stack>
  );
};
const Title = styled.h1`
  font-family: Apple Chancery, cursive;
  margin-top: 15px;
  margin-bottom: 25px;
  color: #87a15b;
`;
const Text = styled.div``;
const HeaderLink = styled.a`
  color: #87a15b;
  text-decoration: none;
`;

export default Gift;
