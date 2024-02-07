import React from "react";
import Header from "../components/Header.tsx";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import chalet from "./../assets/chalet.png";
import babyBed from "./../assets/baby-bed.png";
import us from "./../assets/us.jpg";
import { ActiveNavItem } from "../type.ts";

const Gift: React.FC = () => {
  return (
    <>
      <Header activeItem={ActiveNavItem.Gift} />
      <Content className="text-center">
        <Title>
          Une{" "}
          <HeaderLink href="" target="_blank" rel="noreferrer">
            cagnotte
          </HeaderLink>{" "}
          pour...
        </Title>
        <Row>
          <Col>
            <div>
              ... Un voyage de noce dans un petit chalet perdu dans la montagne
            </div>
            <Image src={chalet} alt="logo" width={400} height={300} />
          </Col>
          <Col>
            <div>... Des projets futurs</div>
            <br />
            <Image src={babyBed} alt="logo" width={400} height={300} />
          </Col>
          <Col>
            <div>... Notre vie à deux</div>
            <br />
            <Image src={us} alt="logo" width={300} height={300} />
            <br />
          </Col>
        </Row>
        <br />
        <br />
        <CustomButton href="">Cagnotte</CustomButton>
        {/* <Link href="" target="_blank" rel="noreferrer">
          Cagnotte
        </Link> */}
        <br />
        <br />
        <div>Merci !</div>
      </Content>
    </>
  );
};

const Content = styled.div`
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const CustomButton = styled(Button)`
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #87a15b;

  border: 0px;
`;

const Image = styled.img`
  margin-bottom: 15px;
`;
const Title = styled.h1`
  font-family: Apple Chancery, cursive;
  margin-top: 15px;
  margin-bottom: 25px;
  color: #87a15b;
`;

const HeaderLink = styled.a`
  color: #87a15b;
  text-decoration: none;
`;

export default Gift;
