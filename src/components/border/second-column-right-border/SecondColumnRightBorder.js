export const SecondColumnRightBorder = ({ index }) => {
  return (
    <span
      className="border-right"
      data-testid="second-column-right-border"
      style={{
        gridRow: `${index * 12 + 1} / 12 span`,
        gridColumn: "3 / 4",
      }}
    />
  );
};
