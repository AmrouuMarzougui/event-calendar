import React, { useEffect } from "react";
import "./Calendar.css";
import { range } from "../../utils/Range";
import inputs from "../../data/input.json";
import { randomColor } from "../../utils/RandomColor";
import { Event } from "../event/Event";
import { HoursColumn } from "../hours-column/HoursColumn";
import { SecondColumnBottomBorder } from "../border/SecondColumnBottomBorder";
import { FirstColumnBottomBorder } from "../border/FirstColumnBottomBorder";
import { FirstColumnRightBorder } from "../border/FirstColumnRightBorder";
import { SecondColumnRightBorder } from "../border/SecondColumnRightBorder";

const getEndTime = (event) => {
  const duration = getMinutes(event) + event.duration;
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours >= 10 ? hours : `0${hours}`}:${
    minutes >= 10 ? minutes : `0${minutes}`
  }`;
};

const getMinutes = (event) => {
  return (
    parseInt(event.start.split(":")[0]) * 60 +
    parseInt(event.start.split(":")[1])
  );
};

const events = () => {
  const sortedEvents = inputs.slice();
  sortedEvents.sort(
    (a, b) => getMinutes(a) - getMinutes(b) || a.duration - b.duration
  );

  const events = [];
  let current = {};
  sortedEvents.forEach((element) => {
    if (!current.events) {
      current = {
        start: element.start,
        end: getEndTime(element),
        events: [element],
      };
      return;
    }
    if (element.start >= current.start && element.start < current.end) {
      current.events.push(element);
      if (getEndTime(element) > current.end) {
        current.end = getEndTime(element);
      }
      return;
    }
    events.push(current);
    current = {
      start: element.start,
      end: getEndTime(element),
      events: [element],
    };
  });
  events.push(current);
  return events;
};

export const Calendar = () => {
  useEffect(() => {
    randomColor();
  }, []);

  const groups = events();

  return (
    <div className="calendar-container">
      {range(13, 1, 9).map((hour, index) => [
        // hours columns
        <HoursColumn index={index} hour={hour} />,
        // first column right border
        <FirstColumnRightBorder index={index} />,
        // second column bottom border
        <SecondColumnBottomBorder index={index} />,
        // second column right border
        <SecondColumnRightBorder index={index} />,
        // first column bottom border
        <FirstColumnBottomBorder index={index} />,
      ])}

      {groups &&
        groups.map((g, index) => {
          return g.events.length === 1
            ? g.events.map((e, j) => {
                return (
                  <Event
                    key={j}
                    gridRow={`${
                      Math.floor(getMinutes(e) - 9 * 60) / 5 + 1
                    } / ${Math.floor(e.duration / 5)} span`}
                    gridColumn={"2 / 4"}
                    id={e.id}
                  />
                );
              })
            : g.events.map((e, i) => {
                return (
                  <Event
                    key={i}
                    gridRow={`${
                      Math.floor(getMinutes(e) - 9 * 60) / 5 + 1
                    } / ${Math.floor(e.duration / 5)} span`}
                    gridColumn={i % 2 ? "3 / 4" : "2 / 3"}
                    id={e.id}
                  />
                );
              });
        })}
    </div>
  );
};
