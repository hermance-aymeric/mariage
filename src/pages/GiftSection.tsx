import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotosStack from "../components/PhotosStack/PhotosStack.tsx";
import brittanyBeach from "./../assets/brittanyBeach.webp";
import sunset from "./../assets/sunset.webp";
import Planning from "../components/Planning.tsx";
import chalet from "./../assets/chalet.png";
import babyBed from "./../assets/baby-bed.png";

const GiftSection = () => {
  return (
    <Container fluid className="py-4 px-5">
      <Row>
        <Col>
          <Planning />
        </Col>
        <Col>
          <PhotosStack photos={[chalet, babyBed]} />
        </Col>
      </Row>
    </Container>
  );
};

export default GiftSection;
