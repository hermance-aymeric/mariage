import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "./../assets/logo.svg";
import { ActiveNavItem } from "../type.ts";
import styled from "styled-components";

type tHeaderProps = {
  activeItem?: ActiveNavItem;
};

const Header: React.FC<tHeaderProps> = ({ activeItem }) => {
  window.onload = function () {
    var headerHeight = document.querySelector("#header").clientHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      headerHeight + "px"
    );
  };

  const Outlined = styled.div`
    @media (min-width: 1024px) {
      border: 1px solid #000000a6;
      border-radius: 4px;
      padding: 4px;
      margin: 4px;
      &:hover {
        border-color: #87a15b;
      }
    }
  `;
  return (
    <Navbar
      id="header"
      expand="lg"
      fixed="top"
      className="bg-body-tertiary px-4 shadow-sm"
    >
      <Container fluid>
        <Navbar.Brand href="/mariage">
          <img src={logo} alt="logo" width={60} height={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav as="ul" className="d-flex align-items-center">
            <Nav.Item as="li">
              <Nav.Link
                className=" justify-content-center"
                href="/mariage"
                active={activeItem === ActiveNavItem.Home}
              >
                Accueil
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                className="d-flex justify-content-center"
                href="/mariage/gift"
                active={activeItem === ActiveNavItem.Gift}
              >
                Cagnotte
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                className="d-flex justify-content-center"
                href="/mariage/maps"
                active={activeItem === ActiveNavItem.Maps}
              >
                Plan d'accès
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                className="d-flex justify-content-center"
                href="/mariage/rsvp"
                active={activeItem === ActiveNavItem.Rsvp}
              >
                <Outlined>RSVP</Outlined>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
