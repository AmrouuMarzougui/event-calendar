import React, { useEffect } from "react";
import "../styles/Calendar.css";
import { range } from "../utils/Range";
import inputs from "../data/input.json";
import { Event } from "./Event";
import { areHoursTheSame } from "../utils/SameTime";
import { randomColor } from "../utils/RandomColor";

export const Calendar = () => {
  //function to check for overlapping
  function overlayCheck() {
    let points = document.querySelectorAll(".input-event");
    let rightPos = (elem) => elem.getBoundingClientRect().right;
    let leftPos = (elem) => elem.getBoundingClientRect().left;
    let topPos = (elem) => elem.getBoundingClientRect().top;
    let btmPos = (elem) => elem.getBoundingClientRect().bottom;

    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points.length; j++) {
        let isOverlapping = !(
          rightPos(points[i]) < leftPos(points[j]) ||
          leftPos(points[i]) > rightPos(points[j]) ||
          btmPos(points[i]) < topPos(points[j]) ||
          topPos(points[i]) > btmPos(points[j])
        );

        console.log("isOverlapping", isOverlapping);

        if (isOverlapping && j !== i) {
          points[i].innerHTML = `${points[i].innerHTML} C`;
        }
      }
    }
  }

  useEffect(() => {
    randomColor();
    overlayCheck();
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

let isColliding = function (div1, div2) {
  let d1Offset = div1.offset();
  let d1Height = div1.outerHeight(true);
  let d1Width = div1.outerWidth(true);
  let d1Top = d1Offset.top + d1Height;
  let d1Left = d1Offset.left + d1Width;

  let d2Offset = div2.offset();
  let d2Height = div2.outerHeight(true);
  let d2Width = div2.outerWidth(true);
  let d2Top = d2Offset.top + d2Height;
  let d2Left = d2Offset.left + d2Width;

  return !(
    d1Top < d2Offset.top ||
    d1Offset.top > d2Top ||
    d1Left < d2Offset.left ||
    d1Offset.left > d2Left
  );
};
