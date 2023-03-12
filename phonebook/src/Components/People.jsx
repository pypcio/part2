import React, { useState } from "react";
import Person from "./Person";

const People = ({ persons }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <Person
          key={index}
          id={person.id}
          name={person.name}
          number={person.number}
        />
      ))}
    </div>
  );
};

export default People;
