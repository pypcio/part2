import React, { useState } from "react";
import Person from "./Person";

const People = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <Person
          key={index}
          id={person.id}
          name={person.name}
          number={person.number}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default People;
