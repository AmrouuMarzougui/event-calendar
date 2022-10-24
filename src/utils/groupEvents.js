import { getEndTime } from "./getEndTime";
import { getMinutes } from "./getMinutes";

// Function to get events sorted and grouped by hour
export const events = (inputs) => {
  const sortedEvents = inputs.slice();
  sortedEvents.sort(
    (a, b) => getMinutes(a) - getMinutes(b) || a.duration - b.duration
  );

  const events = [];
  let current = {};
  sortedEvents.forEach((element) => {
    if (!current.events) {
      current = {
        start: element.start,
        end: getEndTime(element),
        events: [element],
      };
      return;
    }
    if (element.start >= current.start && element.start < current.end) {
      current.events.push(element);
      if (getEndTime(element) > current.end) {
        current.end = getEndTime(element);
      }
      return;
    }
    events.push(current);
    current = {
      start: element.start,
      end: getEndTime(element),
      events: [element],
    };
  });
  events.push(current);
  return events;
};
