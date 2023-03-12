import React from "react";

const Form = ({
  handleNewName,
  handleNewPerson,
  handleNewPhone,
  newName,
  newNumber,
}) => {
  return (
    <React.Fragment>
      <form onSubmit={handleNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
          <br />
          number: <input value={newNumber} onChange={handleNewPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
