//function to generate random background color for each event
export const randomColor = () => {
  return document.querySelectorAll(".input-event").forEach((x, i) => {
    document.querySelectorAll(".input-event")[i].style.background =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  });
};
