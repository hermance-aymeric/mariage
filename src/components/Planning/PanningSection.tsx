import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotosStack from "../PhotosStack/PhotosStack.tsx";
import brittanyBeach from "./../../assets/brittanyBeach.webp";
import sunset from "./../../assets/sunset.webp";
import Planning from "./Planning.tsx";

const PlanningSection = () => {
  return (
    <Container fluid className="py-4 px-5">
      <Row>
        <Col>
          <PhotosStack photos={[brittanyBeach, sunset]} gap={"lg"} />
        </Col>
        <Col>
          <Planning />
        </Col>
      </Row>
    </Container>
  );
};

export default PlanningSection;
