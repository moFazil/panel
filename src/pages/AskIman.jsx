import React, { useEffect, useState } from "react";
import "../../src/App.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart, faCogs, faClock, faRocket } from "@fortawesome/free-solid-svg-icons";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("March 31, 2025 00:00:00").getTime();

    const updateTimer = () => {
      const currentDate = new Date().getTime();
      const remainingTime = targetDate - currentDate;

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      if (remainingTime <= 0) {
        setTimeLeft("We're live!");
      } else {
        setTimeLeft(`Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="comingsoon">
      <h1 className="come md:mt-36">
        <FontAwesomeIcon icon={faHourglassStart} /> Coming Soon
      </h1>
      <p className="comepara">We're working hard to bring you something amazing!</p>
      <div className="timer">{timeLeft}</div>
      <div className="iconss">
        <FontAwesomeIcon icon={faCogs} className="iconsss" />
        <FontAwesomeIcon icon={faClock} className="iconsss" />
        <FontAwesomeIcon icon={faRocket} className="iconsss" />
      </div>
    </div>
  );
};

export default ComingSoon;
