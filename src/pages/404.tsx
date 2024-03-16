import React from "react";
import Header from "../components/header2.tsx";
import styled from "styled-components";
import logo from "./../assets/logo.png";

const Error: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Title><b>404</b></Title>
        <Container>
          <Image src={logo} alt="logo" />
        </Container>
        <Title>Page introuvable ! </Title>
      </div>
    </>
  );
};

const Image = styled.img`
  width: 80%;
  max-width: 300px;
`;

const Title = styled.h1`
  margin: auto;
  margin-top: 30px;
  text-align: center;
  font-family: Apple Chancery;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Error;
