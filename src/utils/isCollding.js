export const isColliding = (div1, div2) => {
  let d1Offset = div1.offset();
  let d1Height = div1.outerHeight(true);
  let d1Width = div1.outerWidth(true);
  let d1Top = d1Offset.top + d1Height;
  let d1Left = d1Offset.left + d1Width;

  let d2Offset = div2.offset();
  let d2Height = div2.outerHeight(true);
  let d2Width = div2.outerWidth(true);
  let d2Top = d2Offset.top + d2Height;
  let d2Left = d2Offset.left + d2Width;

  return !(
    d1Top < d2Offset.top ||
    d1Offset.top > d2Top ||
    d1Left < d2Offset.left ||
    d1Offset.left > d2Left
  );
};
