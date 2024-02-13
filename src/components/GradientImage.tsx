import React from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";

type tGradiantImageProps = {
  src: string;
};

const GradiantImage: React.FC<tGradiantImageProps> = ({ src }) => {
  return (
    <Overlay>
      <Image src={src} fluid />
    </Overlay>
  );
};

const Overlay = styled.div`
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.9) 60%, transparent 100%);
  @media (max-width: 1024px) {
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 70%, transparent 100%);
  }
`;


export default GradiantImage;
