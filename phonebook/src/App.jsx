import { useState } from "react";
import "./App.css";
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewPerson = (event) => {
    event.preventDefault();
    const Obj = {
      name: newName,
    };
    persons.filter((person) => person.name === newName).length === 0
      ? setPersons(persons.concat(Obj))
      : alert(`Name ${newName} already exists`);
    setNewName("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
        <h2>Numbers</h2>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
