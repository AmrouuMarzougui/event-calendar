export const SecondColumnBottomBorder = ({ index }) => {
  return (
    <span
      className={index !== 12 ? "border-bottom" : null}
      style={{
        gridRow: `${(index + 1) * 12} / ${(index + 1) * 12}`,
        gridColumn: "3 / 4",
      }}
    />
  );
};
