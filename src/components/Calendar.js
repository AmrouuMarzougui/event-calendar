import React, { useEffect } from "react";
import "../styles/Calendar.css";
import { range } from "../utils/Range";
import inputs from "../data/input.json";
import { Event } from "./Event";
import { areHoursTheSame } from "../utils/SameTime";
import { randomColor } from "../utils/RandomColor";

export const Calendar = () => {
  useEffect(() => {
    randomColor();
  }, []);

  return (
    <div className="container">
      {range(13, 1, 9).map((hour, index) => (
        <div className="span-hour" key={index}>
          <span>{`${hour}:00`}</span>

          <div className="event-content">
            {inputs.map(
              (input) =>
                areHoursTheSame(input.start.split(":")[0], `${hour}`) && (
                  <Event
                    className="input-event"
                    event={input.id}
                    key={input.id}
                    marginTop={(input.start.split(":")[1] / 60) * 100}
                    height={(input.duration / 60) * 100}
                  />
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
