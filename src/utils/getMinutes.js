//function to get minutes from start attribut in the event
export const getMinutes = (event) => {
  return (
    parseInt(event.start.split(":")[0]) * 60 +
    parseInt(event.start.split(":")[1])
  );
};
