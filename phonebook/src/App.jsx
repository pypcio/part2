import { useState } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import People from "./Components/People";
import Form from "./Components/Form";
const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [check, setCheck] = useState("");
  const [display, setDisplay] = useState(persons);

  const handleDisplay = (phrase) => {
    const temp = persons.filter((person) =>
      person.name.toLowerCase().includes(phrase.toLowerCase())
    );
    setDisplay(temp);
  };

  const handleNewPerson = (event) => {
    let idNum = 1;
    if (persons.length !== 0) {
      idNum = persons[persons.length - 1].id + 1;
    }
    event.preventDefault();
    const Obj = {
      name: newName,
      number: newNumber,
      id: idNum,
    };
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{3}$/;
    persons.filter((person) => {
      return person.name === newName || person.number === newNumber;
    }).length === 0
      ? phoneNumberRegex.test(newNumber)
        ? Obj.name.length !== 0
          ? (setPersons(persons.concat(Obj)), setDisplay(persons.concat(Obj)))
          : alert("Incorect name")
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
  const handleCheck = (event) => {
    const tempCheck = event.target.value;
    setCheck(tempCheck);
    handleDisplay(tempCheck);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <h4>Search Person</h4>
      <Filter check={check} handleCheck={handleCheck} />
      <h4>Add new Person</h4>
      <Form
        handleNewName={handleNewName}
        handleNewPerson={handleNewPerson}
        handleNewPhone={handleNewPhone}
        newNam={newName}
        newNumber={newNumber}
      />
      <div>
        <h2>Numbers</h2>
        <People persons={display} />
      </div>
    </div>
  );
};

export default App;
