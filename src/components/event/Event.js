import React from "react";
import "../../styles/Event.css";

export const Event = ({ event, height, marginTop, id, className }) => {
  return (
    <div data-testid="event-input">
      <div
        id={id}
        className={`${className} event-container`}
        style={{
          height: `${height}px`,
          marginTop: `${marginTop}px`,
        }}
      >
        <span className="span-text" style={{ lineHeight: `${height}px` }}>
          {event.id}
        </span>
      </div>
      <div className="tooltip-event">
        <h5>ID: {event.id}</h5>
        <h5>Début: {event.start}</h5>
        <h5>Durée: {event.duration}</h5>
      </div>
    </div>
  );
};
