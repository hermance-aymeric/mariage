import React from "react";
import styled from "styled-components";
import { Stack } from "react-bootstrap";
import {
  faMartiniGlassCitrus,
  faPlaceOfWorship,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";

const linkToItineraryToChurch =
  "https://www.google.com/maps/dir//%C3%89glise+Saint-Denis,+Rue+de+l'%C3%89glise,+72350+Saint-Denis-d'Orques/@48.0272882,-0.2752549,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x480834424de20677:0x47992b38aef9060!2m2!1d-0.2726799!2d48.0272645!3e0?entry=ttu";
const linkToItineraryToMarty =
  "https://www.google.com/maps/dir//Logis+de+Martign%C3%A9,+Martign%C3%A9,+Avess%C3%A9/@47.9401075,-0.2962198,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x480837498eebf79d:0x463cd0ece6044971!2m2!1d-0.2549753!2d47.9400943!3e0?entry=ttu";

const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "fadeIn",
      bounce: 0.8,
      duration: 1,
      damping: 8,
      delay: 0.1,
      stiffness: 100,
    },
  },
};

const Maps: React.FC = () => {
  return (
    <>
      <Stack direction="vertical" gap={3}>
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          className="d-flex flex-column align-items-center"
        >
          <Title>
            <FontAwesomeIcon icon={faPlaceOfWorship} /> Cérémonie religieuse
          </Title>
          La cérémonie aura lieu à 15 heures en l'église de{" "}
          <Link href={linkToItineraryToChurch} target="_blank" rel="noreferrer">
            Saint Denis d'Orques, 72350
          </Link>
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          className="d-flex flex-column align-items-center"
        >
          <Title>
            <FontAwesomeIcon icon={faMartiniGlassCitrus} size="xl" /> Cocktail
          </Title>
          Nous vous recevons pour un cocktail ensuite dans le parc du{" "}
          <Link href={linkToItineraryToMarty} target="_blank" rel="noreferrer">
            Château de Martigné, 72350 Avessé
          </Link>
        </motion.div>
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          className="d-flex flex-column align-items-center"
        >
          <Title>
            <FontAwesomeIcon icon={faUtensils} /> Diner placé
          </Title>
          Le dîner aura lieu au logis de Martigné, à côté du château, dans{" "}
          <Link href={linkToItineraryToMarty} target="_blank" rel="noreferrer">
            La Grande Ecurie
          </Link>
        </motion.div>
      </Stack>
    </>
  );
};

const Content = styled.div`
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-family: Apple Chancery, cursive;
  margin-top: 15px;
  color: #87a15b;
`;

const Link = styled.a`
  color: #d4af37;
  margin-bottom: 4rem;
`;

export default Maps;