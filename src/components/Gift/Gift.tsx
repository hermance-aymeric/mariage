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
        <FadeInAnimation>
          <Ivy />
        </FadeInAnimation>
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
          <span>
            ... Un voyage de noce dans un petit chalet
            <br /> perdu dans la montagne
          </span>
        </FadeInAnimation>
        <FadeInAnimation>
          <span>... Des projets futurs</span>
        </FadeInAnimation>
        <FadeInAnimation>... Notre vie à deux</FadeInAnimation>
        <Stack direction="vertical" gap={4} className="mt-5">
          <FadeInAnimation>
            <OutlineButton href="https://app.lyf.eu/pot/9b1d4b2b-dd05-40c3-886f-5045fcfa23bd?lang=fr">
              <span>Cagnotte</span>
            </OutlineButton>
          </FadeInAnimation>
          <FadeInAnimation>
            <Text>Merci !</Text>
          </FadeInAnimation>
        </Stack>
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
const Text = styled.h2`
  font-family: Apple Chancery, cursive;
  color: #87a15b;
`;
const HeaderLink = styled.a`
  color: #87a15b;
  text-decoration: none;
`;

export default Gift;
