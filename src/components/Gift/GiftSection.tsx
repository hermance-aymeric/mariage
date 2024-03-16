import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotosStack from "../PhotosStack/PhotosStack.tsx";
import chalet from "./../../assets/chalet.png";
import babyBed from "./../../assets/baby-bed.png";
import Gift from "./Gift.tsx";
import useIsMobile from "../../hook/useMobileSize.tsx";

const GiftSection = () => {
  const isMobile = useIsMobile();
  return (
    <Container fluid className="py-4 px-5 section-container">
      {isMobile ? (
        <Row>
          <Col>
            <PhotosStack photos={[chalet, babyBed]} gap={"xs"} />
          </Col>
          <Col>
            <Gift />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <Gift />
          </Col>
          <Col>
            <PhotosStack photos={[chalet, babyBed]} gap={"xs"} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default GiftSection;
