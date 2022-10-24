export const SecondColumnBottomBorder = ({ index }) => {
  return (
    <span
      className={index !== 12 ? "border-bottom" : null}
      data-testid="second-column-bottom-border"
      style={{
        gridRow: `${(index + 1) * 12} / ${(index + 1) * 12}`,
        gridColumn: "3 / 4",
      }}
    />
  );
};
