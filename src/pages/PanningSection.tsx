import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotosStack from "../components/PhotosStack/PhotosStack.tsx";
import brittanyBeach from "./../assets/brittanyBeach.webp";
import sunset from "./../assets/sunset.webp";
import Planning from "../components/Planning.tsx";

const PlanningSection = () => {
  return (
    <Container fluid className="py-4 px-5">
      <Row>
        <Col>
          <PhotosStack photos={[brittanyBeach, sunset]} />
        </Col>
        <Col>
          <Planning />
        </Col>
      </Row>
    </Container>
  );
};

export default PlanningSection;
