import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "./../assets/logo.svg";
import { ActiveNavItem } from "../type.ts";


type tHeaderProps = {
  activeItem?: ActiveNavItem
}

const Header: React.FC<tHeaderProps> = ({ activeItem }) => {
  window.onload = function () {
    var headerHeight = document.querySelector("#header").clientHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      headerHeight + "px"
    );
  };
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
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link
                className="d-flex justify-content-center"
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
                RSVP
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
