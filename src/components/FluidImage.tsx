import React from "react";
import styled from "styled-components";

type tFluidImageProps = {
  src: string;
};

const FluidImage: React.FC<tFluidImageProps> = ({ src }) => {
  return <MyImage className="image" src={src} />;
};

const MyImage = styled.img`
  width: 100%;
  opacity: 0.8;
`;

export default FluidImage;
