import { getMinutes } from "./getMinutes";

//function to get end Time from an event
export const getEndTime = (event) => {
  const duration = getMinutes(event) + event.duration;
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours >= 10 ? hours : `0${hours}`}:${
    minutes >= 10 ? minutes : `0${minutes}`
  }`;
};
