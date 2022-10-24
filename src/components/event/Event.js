import React from "react";
import "./Event.css";

export const Event = ({ gridRow, gridColumn, id }) => {
  return (
    <div
      className="input-event"
      style={{
        gridRow: gridRow,
        gridColumn: gridColumn,
      }}
    >
      <span className="event-content">ID: {id}</span>
    </div>
  );
};
