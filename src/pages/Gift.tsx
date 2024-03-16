import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { Stack } from "react-bootstrap";
import FadeInText from "../components/FadeInText.tsx";

const Gift: React.FC = () => {
  return (
    <Stack direction="vertical" gap={3} className="text-center pt-5">
      <FadeInText>
        <Title>
          Une
          <HeaderLink href="" target="_blank" rel="noreferrer">
            cagnotte
          </HeaderLink>{" "}
          pour...
        </Title>
      </FadeInText>
      <FadeInText>
        <Text>
          ... Un voyage de noce dans un petit chalet
          <br /> perdu dans la montagne
        </Text>
      </FadeInText>
      <FadeInText>
        <Text>... Des projets futurs</Text>
      </FadeInText>
      <FadeInText>... Notre vie à deux</FadeInText>
      <FadeInText>
        <Button variant="outline-success" size="lg">
          Cagnotte
        </Button>
      </FadeInText>
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
