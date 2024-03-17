import React from "react";
import styled from "styled-components";
import img from "./../assets/castel-back.webp";
import imgMobile from "./../assets/castel-back-mobile.png";
import useIsMobile from "../hook/useMobileSize.tsx";

const Cover = () => {
  const isMobile = useIsMobile();
  const Image = styled.div`
    background: url(${img}) top;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;

  return <Image />;
};

export default Cover;
