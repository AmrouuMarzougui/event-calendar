//function to create range of number
export const range = (end, pas, start) => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + pas,
    }),
    { result: [], current: start }
  );
  return result;
};
