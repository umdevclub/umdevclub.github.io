import { useState, useEffect } from "react";
import "@/styles/DevhacksGithub.scss";

const CountdownTimer = () => {
  const hackathonDate = new Date("February 20, 2026 13:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = hackathonDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      minutes,
      seconds,
      isStarted: distance < 0,
    };
  }

  return (
    <div className="countdown-container">
      {timeRemaining.isStarted ? (
        <p className="hackathon-started">The hackathon has started!</p>
      ) : (
        <p className="countdown-text">
          Starts in: {timeRemaining.days} days, {timeRemaining.hours} hours,{" "}
          {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
