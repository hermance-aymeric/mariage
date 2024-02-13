import React from "react";
import styled from "styled-components";

type tGradiantImageProps = {
  src: string;
};

const GradiantImage: React.FC<tGradiantImageProps> = ({ src }) => {
  return (
    <Overlay>
      <MyImage className="image" src={src} />;
    </Overlay>
  );

};

const MyImage = styled.img`
  width: 100%;
`;

const Overlay = styled.div`
  mask-image: linear-gradient(to top, rgba(0, 0, 0,0.9) 60%, transparent 100%);
  @media (max-width: 1024px) {
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 70%, transparent 100%);
  }

`;


export default GradiantImage;
