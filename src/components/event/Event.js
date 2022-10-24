import React from "react";
import "./Event.css";

export const Event = ({ gridRow, gridColumn, id }) => {
  return (
    <div
      className="input-event"
      data-testid="event-input"
      style={{
        gridRow: gridRow,
        gridColumn: gridColumn,
      }}
    >
      <span className="event-content">ID: {id}</span>
    </div>
  );
};
