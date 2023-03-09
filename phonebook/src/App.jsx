import { useState } from "react";
import "./App.css";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "242-543-643" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNewPerson = (event) => {
    event.preventDefault();
    const Obj = {
      name: newName,
      number: newNumber,
    };
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{3}$/;
    persons.filter((person) => {
      return person.name === newName || person.number === newNumber;
    }).length === 0
      ? phoneNumberRegex.test(newNumber)
        ? setPersons(persons.concat(Obj))
        : alert("Incorect phone number form, should look like XXX-XXX-XXX")
      : alert(`Name or Number already exists`);
    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewPhone = (event) => {
    const tempNumber = event.target.value;
    setNewNumber(tempNumber);
  };
  return (
    <div>
      <h2>Phonebook</h2>
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
      <div>
        <h2>Numbers</h2>
        {persons.map((person, index) => (
          <p key={person.name}>
            {`${index + 1}.  ${person.name}  ${person.number}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
