import React from "react";
import styled from "styled-components";
import { Stack } from "react-bootstrap";
import FadeInAnimation from "../FadeInAnimation.tsx";
import OutlineButton from "../OutilineButton.tsx";
import useIsMobile from "../../hook/useMobileSize.tsx";
import Ivy from "../Ivy.tsx";

const Gift: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile && <Offset />}
      <Stack direction="vertical" gap={4} className="text-center pt-5">
        <Ivy />
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
          <OutlineButton href="#">
            <Text>Cagnotte</Text>
          </OutlineButton>
        </FadeInAnimation>
        <FadeInAnimation>
          <Text>Merci !</Text>
        </FadeInAnimation>
      </Stack>
    </>
  );
};

const Offset = styled.div`
  width: 100%;
  height: 15rem;
`;

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
