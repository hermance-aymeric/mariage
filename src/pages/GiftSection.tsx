import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotosStack from "../components/PhotosStack/PhotosStack.tsx";
import chalet from "./../assets/chalet.png";
import babyBed from "./../assets/baby-bed.png";
import Gift from "./Gift.tsx";
import "./GiftSection.css";

const GiftSection = () => {
  return (
    <Container fluid className="py-4 px-5 section-container">
      <Row>
        <Col>
          <Gift />
        </Col>
        <Col>
          <PhotosStack photos={[chalet, babyBed]} gap={"xs"} />
        </Col>
      </Row>
    </Container>
  );
};

export default GiftSection;
