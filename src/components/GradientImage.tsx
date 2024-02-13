import React from "react";
import styled from "styled-components";
import img from "./../assets/IMG_1090.webp";

type tGradiantImageProps = {
  src: string;
};

const GradiantImage: React.FC<tGradiantImageProps> = ({ src }) => {
  return <Overlay />;
};

const Overlay = styled.div`
  opacity: 0.9;
  background-image: url("${img}");
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  // mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.9) 60%, transparent 100%);
  // @media (max-width: 1024px) {
  //   mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 70%, transparent 100%);
  // }
  width: 100%;
  height: 100vh;
`;


export default GradiantImage;
