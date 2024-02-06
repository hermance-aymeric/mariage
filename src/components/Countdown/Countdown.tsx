import React, { useEffect, useState } from "react";
import './Countdown.css'

let targetTime = new Date("2024-09-14").getTime();
// Add 15 hours because we're getting married on the 14th at  <3
targetTime += (15 * 60 * 60 * 1000);

const Countdown: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<number>(Date.now());

  const timeBetween: number = targetTime - currentTime;
  const seconds:number = Math.floor((timeBetween / 1000) % 60);
  const minutes:number = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours:number = Math.floor(((timeBetween / (1000 * 60 * 60))) % 24);
  const days:number = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <>
      <h1 className="position-absolute top-50 start-50 translate-middle text-center text-black countdown-font">
        <span>{days}Jours </span>
        <span>{hours}heures </span>
        <span>{minutes}minutes </span>
        <span>{seconds}secondes</span>
      </h1>
    </>
  );
};

export default Countdown;