import React, { useState } from "react";

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
        return <Course course={course} />;
      })}
    </div>
  );
};
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <React.Fragment>
      <h2>Web development curriculum</h2>
      <Courses courses={courses} />
    </React.Fragment>
  );
};

export default App;
