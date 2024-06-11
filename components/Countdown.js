import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ onComplete }) => {
  const launchDate = new Date("2024-06-11T14:30:00");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <Countdown
          date={launchDate}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              onComplete();
              return (
                <span className="mb-6 text-3xl font-bold">
                  $GWEI Token Pass
                </span>
              );
            } else {
              return (
                <div className="text-center">
                  <h1 className="mb-4 text-6xl font-bold">
                    Countdown to Launch
                  </h1>
                  <div className="text-4xl">
                    {days}d {hours}h {minutes}m {seconds}s
                  </div>
                </div>
              );
            }
          }}
        />
      ) : (
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold">Countdown to Launch</h1>
          <div className="text-4xl">Loading...</div>
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
