/* eslint-disable react/prop-types */
export const Total = ({ content }) => {
  const total = content.reduce((accum, prgrph) => accum + prgrph.exercises, 0);
  return <strong>Total of {total} exercises</strong>;
};
