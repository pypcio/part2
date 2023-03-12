import React, { useState } from "react";

const Person = ({ id, name, number }) => {
  return <p>{`${id}.  ${name}  ${number}`}</p>;
};

export default Person;
