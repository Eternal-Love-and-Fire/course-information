import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

/* eslint-disable react/prop-types */
export const Course = ({ course }) => {
  return (
    <>
    <Header course={course.name} />
            <Content content={course.parts} />
            <Total content={course.parts} />
      {/* {course.map((item) => {
        return (
          <div key={item.id}>
            <Header course={course.name} />
            <Content content={course.parts} />
            <Total content={course.parts} />
          </div>
        );
      })} */}
    </>
  );
};
