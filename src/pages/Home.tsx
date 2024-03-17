import React from "react";
import Header from "../components/Header.tsx";
import styled from "styled-components";
import { ActiveNavItem } from "../type.ts";
import BackgroundCover from "../components/BackgroundCover.tsx";
import PanningSection from "../components/Planning/PanningSection.tsx";
import GiftSection from "../components/Gift/GiftSection.tsx";
import Rsvp from "../components/Rsvp/Rsvp.tsx";
import CountdownSection from "../components/Countdown/CountdownSection.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Home} />
      <BackgroundCover />
      <OffestScreen />
      <Content>
        <CountdownSection />
      </Content>
      <Wrapper>
        <Section id="planning">
          <PanningSection />
        </Section>
        <Section id="gift">
          <GiftSection />
        </Section>
        <Section id="rsvp">
          <Rsvp />
        </Section>
      </Wrapper>
    </>
  );
};
const OffestScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
`;
const Wrapper = styled.div`
  background-color: white;
  position: relative;
`;
const Section = styled.div`
  @media (min-width: 1024px) {
    padding: 3rem 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 45%;
  left: 20%;
  font-size: 36px;
  width: 60%;
  font-weight: bold;
  @media (max-width: 1024px) {
    font-size: 24px;
    top: 35%;
    left: 10%;
    width: 80%;
  }
`;

export default Home;
