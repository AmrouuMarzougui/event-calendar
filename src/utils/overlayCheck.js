//function to check for overlapping
export const overlayCheck = () => {
  let points = document.querySelectorAll(".input-event");
  let rightPos = (elem) => elem.getBoundingClientRect().right;
  let leftPos = (elem) => elem.getBoundingClientRect().left;
  let topPos = (elem) => elem.getBoundingClientRect().top;
  let btmPos = (elem) => elem.getBoundingClientRect().bottom;

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      let isOverlapping = !(
        rightPos(points[i]) < leftPos(points[j]) ||
        leftPos(points[i]) > rightPos(points[j]) ||
        btmPos(points[i]) < topPos(points[j]) ||
        topPos(points[i]) > btmPos(points[j])
      );

      console.log("isOverlapping", isOverlapping);

      if (isOverlapping && j !== i) {
        points[i].innerHTML = `${points[i].innerHTML} C`;
      }
    }
  }
};
