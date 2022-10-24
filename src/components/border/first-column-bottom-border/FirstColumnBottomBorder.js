export const FirstColumnBottomBorder = ({ index }) => {
  return (
    <span
      className={index !== 12 ? "border-bottom" : null}
      data-testid="first-column-bottom-border"
      style={{
        gridRow: `${(index + 1) * 12} / ${(index + 1) * 12}`,
        gridColumn: "2 / 3",
      }}
    />
  );
};
