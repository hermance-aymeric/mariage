import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
      <CountdownText>
        <span>{days} Jours </span>
        <span>{hours} Heures </span>
        <span>{minutes} Minutes </span>
        <span>{seconds} Secondes</span>
      </CountdownText>
    </Container>
  );
};

const Container = styled.div`
  font-family: Apple Chancery, cursive;
`;
const CountdownText = styled.div`
  font-size: 36px;
  text-align: center;
  color: #ffffff;
  text-shadow: #3a4049 2px 5px;
  @media (max-width: 1024px) {
    color: white;
  }
`;

export default Countdown;
