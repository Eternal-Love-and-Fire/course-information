import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

/* eslint-disable react/prop-types */
export const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course.name} />
            <Content content={course.parts} />
            <Total content={course.parts} />
          </div>
        );
      })}
    </>
  );
};
