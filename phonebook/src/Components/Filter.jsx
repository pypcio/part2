import React, { useState } from "react";

const Filter = ({ check, handleCheck }) => {
  return <input value={check} onChange={handleCheck} />;
};

export default Filter;
