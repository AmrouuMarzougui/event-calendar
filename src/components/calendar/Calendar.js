import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../../styles/Calendar.css";
import { range } from "../../utils/Range";
import inputs from "../../data/input.json";
import { areHoursTheSame } from "../../utils/SameTime";
import { randomColor } from "../../utils/RandomColor";
import { Event } from "../event/Event";

export const Calendar = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    randomColor();
  }, []);

  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  return (
    <div className="caledar-container" data-testid="calendar">
      {range(13, 1, 9).map((hour, index) => (
        <div className="hour-content" key={index} ref={ref}>
          <span>{`${hour}:00`}</span>

          <div className="event-calendar-content">
            {inputs.map(
              (input) =>
                areHoursTheSame(input.start.split(":")[0], `${hour}`) && (
                  <Event
                    className="input-event"
                    event={input}
                    key={input.id}
                    marginTop={(input.start.split(":")[1] / 60) * height}
                    height={(input.duration / 60) * height}
                  />
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
