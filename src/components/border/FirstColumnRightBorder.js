export const FirstColumnRightBorder = ({ index }) => {
  return (
    <span
      className="border-right"
      style={{
        gridRow: `${index * 12 + 1} / 12 span`,
        gridColumn: "2 / 3",
      }}
    />
  );
};
