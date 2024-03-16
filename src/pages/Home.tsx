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
      <Content id="home">
        <CountdownSection />
      </Content>
      <Section id="planning">
        <PanningSection />
      </Section>
      <Section id="gift">
        <GiftSection />
      </Section>
      <Section id="rsvp">
        <Rsvp />
      </Section>
    </>
  );
};

const Section = styled.div`
  padding: 3rem 0;
  margin-bottom: 20rem;
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

export default Home;
