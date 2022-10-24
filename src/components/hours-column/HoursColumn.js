export const HoursColumn = ({ hour, index }) => {
  return (
    <span
      className={index !== 12 ? `border-bottom border-right` : `border-right`}
      style={{
        gridRow: `${index * 12 + 1} / 12 span`,
      }}
    >
      {hour >= 10 ? `${hour}:00` : `0${hour}:00`}
    </span>
  );
};
