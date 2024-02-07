import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Countdown.css";

let targetTime = new Date("2024-09-14").getTime();
// Add 15 hours because we're getting married on the 14th at  <3
targetTime += 15 * 60 * 60 * 1000;

const Countdown: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<number>(Date.now());

  const timeBetween: number = targetTime - currentTime;
  const seconds: number = Math.floor((timeBetween / 1000) % 60);
  const minutes: number = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours: number = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days: number = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

  return (
    <Container>
      <CountdownText className="position-absolute translate-middle text-center">
        <span>{days} Jours </span>
        <br />
        <span>{hours} Heures </span>
        <br />
        <span>{minutes} Minutes </span>
        <br />
        <span>{seconds} Secondes</span>
        <br />
      </CountdownText>
    </Container>
  );
};

const Container = styled.div`
  font-family: Apple Chancery, cursive;
  @media (max-width: 1024px) {
  }
`;
const CountdownText = styled.h1`
  color: black;
  top: 35%;
  left: 50%;
  @media (max-width: 1024px) {
    color: white;
  }
`;

export default Countdown;
