import React from "react";
import Header from "../components/Header.tsx";
import GoogleMapReact from "google-map-react";
import { ActiveNavItem } from "../type.ts";
import styled from "styled-components";
import {
  faMartiniGlassCitrus,
  faMapPin,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const martignePosition = {
  lat: 47.94023,
  lng: -0.254999,
  text: "Château de Martigné",
};
const churchPosition = {
  lat: 48.0272846,
  lng: -0.27268,
  text: "Eglise de Saint Denis d'orques",
};
const centerPosition = {
  lat: 47.9872846,
  lng: -0.26268,
};

// const MyMarker = ({ text }) => <div>{text}</div>;
const linkToItineraryToChurch =
  "https://www.google.com/maps/dir//%C3%89glise+Saint-Denis,+Rue+de+l'%C3%89glise,+72350+Saint-Denis-d'Orques/@48.0272882,-0.2752549,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x480834424de20677:0x47992b38aef9060!2m2!1d-0.2726799!2d48.0272645!3e0?entry=ttu";
const linkToItineraryToMarty =
  "https://www.google.com/maps/dir//Logis+de+Martign%C3%A9,+Martign%C3%A9,+Avess%C3%A9/@47.9401075,-0.2962198,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x480837498eebf79d:0x463cd0ece6044971!2m2!1d-0.2549753!2d47.9400943!3e0?entry=ttu";

const renderMarkers = (map: any, maps: any) => {
  let marker = new maps.Marker({
    position: { ...martignePosition },
    map,
  });
  let marker2 = new maps.Marker({
    position: { ...churchPosition },
    map,
  });
  return [marker, marker2];
};

const Maps: React.FC = () => {
  return (
    <>
      <Content id="maps" className="text-center">
        <div>
          <Title>
            <FontAwesomeIcon icon={faMapPin} /> Cérémonie religieuse
          </Title>
          La cérémonie aura lieu à 15 heures en l'église de{" "}
          <Link href={linkToItineraryToChurch} target="_blank" rel="noreferrer">
            Saint Denis d'Orques, 72350
          </Link>
        </div>

        <div>
          <Title>
            <FontAwesomeIcon icon={faMartiniGlassCitrus} size="xl" /> Cocktail
          </Title>
          Nous vous recevons pour un cocktail ensuite dans le parc du{" "}
          <Link href={linkToItineraryToMarty} target="_blank" rel="noreferrer">
            Château de Martigné, 72350 Avessé
          </Link>
        </div>
        <div>
          <Title>
            <FontAwesomeIcon icon={faUtensils} /> Diner placé
          </Title>
          Le dîner aura lieu au logis de Martigné, à côté du château, dans{" "}
          <Link href={linkToItineraryToMarty} target="_blank" rel="noreferrer">
            La Grande Ecurie
          </Link>
        </div>
      </Content>
      {/* <Map> */}
      {/* <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDmGB3sB7SRpghvJC_wx-zB8Z9ZSIfOuyM",
          }}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          defaultCenter={centerPosition}
          defaultZoom={11}
        ></GoogleMapReact> */}
      {/* </Map> */}
    </>
  );
};

const Content = styled.div`
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-family: Apple Chancery, cursive;
  margin-top: 15px;
  color: #87a15b;
`;

const Link = styled.a`
  color: #87a15b;
`

const Map = styled.div`
  height: 350px;
  width: 100%;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default Maps;
