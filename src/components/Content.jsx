/* eslint-disable react/prop-types */
import { Paragraph } from "../shared";

export const Content = ({ content }) => {
  return (
    <>
      {content.map((prgrph) => {
        return (
          <Paragraph
            key={prgrph.part}
            part={prgrph.part}
            exercise={prgrph.exercise}
          />
        );
      })}
    </>
  );
};
