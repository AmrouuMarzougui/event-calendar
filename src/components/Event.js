import React from "react";
import "../styles/Event.css";

export const Event = ({ event, height, marginTop, id, className }) => {
  return (
    <div
      id={id}
      className={`${className} event-container`}
      style={{
        height: `${height}px`,
        marginTop: `${marginTop}px`,
      }}
    >
      <span className="span-text" style={{ lineHeight: `${height}px` }}>
        {event}
      </span>
    </div>
  );
};
