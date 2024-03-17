import React from "react";
import styled from "styled-components";
import img from "./../assets/castel-back.webp";
import imgMobile from "./../assets/castel-back-mobile.png";
import useIsMobile from "../hook/useMobileSize.tsx";

const Cover = () => {
  const isMobile = useIsMobile();
  const Image = styled.div`
    background-image: url("${isMobile ? imgMobile : img}");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
  `;

  return <Image />;
};

export default Cover;
