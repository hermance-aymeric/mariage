import React from "react";
import styled from "styled-components";
import img from "./../assets/castel-back.webp";

const Cover = () => {
  return <Image />;
};

const Image = styled.div`
  background-image: url("${img}");
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export default Cover;
