import React from "react";
import styled from "styled-components";

type OutlineButtonProps = {
  children: React.ReactNode;
  color?: string;
  href?: string;
};

const OutlineButton = ({ children, color, href }: OutlineButtonProps) => {
  const Button = styled.a`
    border: 2px solid ${color || "#87a15b"};
    background: transparent;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    color: ${color || "#87a15b"};
    width: 10rem;

    &:hover {
      background: #87a15b;
      border-color: #87a15b;
      color: white;
      opacity: 0.9;
    }
  `;
  return (
    <Button href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Button>
  );
};

export default OutlineButton;
