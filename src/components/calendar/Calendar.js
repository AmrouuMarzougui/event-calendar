import React, { useEffect } from "react";
import { range } from "../../utils/Range";
import inputs from "../../data/input.json";
import { randomColor } from "../../utils/RandomColor";
import { Event } from "../event/Event";
import { HoursColumn } from "../hours-column/HoursColumn";
import { FirstColumnBottomBorder } from "../border/first-column-bottom-border/FirstColumnBottomBorder";
import { SecondColumnBottomBorder } from "../border/second-column-bottom-border/SecondColumnBottomBorder";
import { SecondColumnRightBorder } from "../border/second-column-right-border/SecondColumnRightBorder";
import { FirstColumnRightBorder } from "../border/first-column-right-border/FirstColumnRightBorder";
import { getMinutes } from "../../utils/getMinutes";
import { events } from "../../utils/groupEvents";
import "./Calendar.css";

export const Calendar = () => {
  const groups = events(inputs);

  useEffect(() => {
    randomColor();
  }, []);

  return (
    <div className="calendar-container" data-testid="calendar">
      {range(13, 1, 9).map((hour, index) => [
        // hours columns
        <HoursColumn index={index} hour={hour} key={Math.random()} />,
        // first column right border
        <FirstColumnRightBorder index={index} key={Math.random()} />,
        // second column bottom border
        <SecondColumnBottomBorder index={index} key={Math.random()} />,
        // second column right border
        <SecondColumnRightBorder index={index} key={Math.random()} />,
        // first column bottom border
        <FirstColumnBottomBorder index={index} key={Math.random()} />,
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
