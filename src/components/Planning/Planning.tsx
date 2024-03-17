import React from "react";
import styled from "styled-components";
import { Stack } from "react-bootstrap";
import {
  faMartiniGlassCitrus,
  faPlaceOfWorship,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInAnimation from "../FadeInAnimation.tsx";
import useIsMobile from "../../hook/useMobileSize.tsx";
import Ivy from "../Ivy.tsx";

const linkToItineraryToChurch =
  "https://www.google.com/maps/dir//%C3%89glise+Saint-Denis,+Rue+de+l'%C3%89glise,+72350+Saint-Denis-d'Orques/@48.0272882,-0.2752549,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x480834424de20677:0x47992b38aef9060!2m2!1d-0.2726799!2d48.0272645!3e0?entry=ttu";
const linkToItineraryToMarty =
  "https://www.google.com/maps/dir//Logis+de+Martign%C3%A9,+Martign%C3%A9,+Avess%C3%A9/@47.9401075,-0.2962198,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x480837498eebf79d:0x463cd0ece6044971!2m2!1d-0.2549753!2d47.9400943!3e0?entry=ttu";

const Maps: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile && <Offset />}
      <Stack direction="vertical" gap={3} className="pt-5">
        <Ivy />
        <FadeInAnimation>
          <Title>Informations pratiques</Title>
        </FadeInAnimation>
        <FadeInAnimation>
          <Text>
            <FontAwesomeIcon icon={faPlaceOfWorship} /> Cérémonie religieuse
          </Text>
          La cérémonie aura lieu à 15 heures en l'église de{" "}
          <Link href={linkToItineraryToChurch} target="_blank" rel="noreferrer">
            Saint Denis d'Orques, 72350
          </Link>
        </FadeInAnimation>

        <FadeInAnimation>
          <Text>
            <FontAwesomeIcon icon={faMartiniGlassCitrus} size="xl" /> Cocktail
          </Text>
          Nous vous recevons pour un cocktail ensuite dans le parc du{" "}
          <Link href={linkToItineraryToMarty} target="_blank" rel="noreferrer">
            Château de Martigné, 72350 Avessé
          </Link>
        </FadeInAnimation>
        <FadeInAnimation>
          <Text>
            <FontAwesomeIcon icon={faUtensils} /> Diner placé
          </Text>
          Le dîner aura lieu au logis de Martigné, à côté du château, dans{" "}
          <Link href={linkToItineraryToMarty} target="_blank" rel="noreferrer">
            La Grande Ecurie
          </Link>
        </FadeInAnimation>
      </Stack>
    </>
  );
};

const Offset = styled.div`
  width: 100%;
  height: 25rem;
  @media (max-width: 1024px) {
    height: 15rem;
  }
`;

const Title = styled.h1`
  font-family: Apple Chancery, cursive;
  margin-top: 15px;
  color: #87a15b;
`;

const Text = styled.h2`
  font-family: Apple Chancery, cursive;
  margin-top: 15px;
  color: #87a15b;
`;

const Link = styled.a`
  color: #d4af37;
  margin-bottom: 4rem;
`;

export default Maps;
