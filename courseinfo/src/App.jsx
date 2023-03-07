import React, { useState } from "react";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
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
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };
  return (
    <React.Fragment>
      <Course course={course} />
    </React.Fragment>
  );
};

export default App;
