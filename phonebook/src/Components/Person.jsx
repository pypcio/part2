import React, { useState } from "react";

const Person = ({ id, name, number, handleDelete }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p>{`${id}.  ${name}  ${number}`}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Person;
