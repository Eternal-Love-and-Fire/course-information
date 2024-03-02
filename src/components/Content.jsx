/* eslint-disable react/prop-types */
import { Paragraph } from "../shared";

export const Content = ({ content }) => {
  console.log(content)
  return (
    <>
      {content.map((prgrph) => {
        return (
          <Paragraph
            key={prgrph.id}
            name={prgrph.name}
            exercises={prgrph.exercises}
          />
        );
      })}
    </>
  );
};
