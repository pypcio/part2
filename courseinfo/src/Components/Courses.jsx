import React from "react";
const Header = ({ name }) => {
  return <h3>{name}</h3>;
};
const Part = ({ part }) => {
  return <p>{`${part.name} ${part.exercises}`}</p>;
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
    </div>
  );
};
const Total = ({ parts }) => {
  const sum = parts.reduce((reducer, part) => {
    return (reducer += part.exercises);
  }, 0);
  const styles = {
    fontWeight: "bold",
  };
  return <p style={styles}>{`total of ${sum} exercises`}</p>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return <Course key={course.id} course={course} />;
      })}
    </div>
  );
};
export default Courses;
