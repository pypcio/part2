import { useState, useEffect } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import People from "./Components/People";
import Form from "./Components/Form";
import Notification from "./Components/Notification";
import noteServises from "./servises/phonebook";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [check, setCheck] = useState("");
  const [display, setDisplay] = useState(persons);
  const [message, setMessage] = useState(null);
  const handleDelete = (id) => {
    window.confirm("Do you want to delete number from list?")
      ? noteServises
          .deleteUser(id)
          .then((response) => {
            const updatedData = persons.filter((n) => n.id !== id);
            setPersons(updatedData);
            setDisplay(updatedData);
            // updateNumbers(updatedData);
            // console.log("Dane zaraz po usunieciu", updatedData);
            return updatedData;
          })
          .then((info) => {
            setMessage(`Deleted sucessfully`);
            setTimeout(() => {
              setMessage(null);
            }, 2000);
          })
      : alert("Person wasn't delete");
  };

  useEffect(() => {
    noteServises
      .getAll()
      .then((responose) => {
        // console.log(responose);
        setPersons(responose);
        setDisplay(responose);
      })
      .catch((error) => {
        console.log("Can't get data!", error);
      });
  }, []);

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
    const filterData = persons.filter((person) => {
      return person.name === newName || person.number === newNumber;
    });
    const getName = filterData.find((p) => p.name === newName);
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{3}$/;
    phoneNumberRegex.test(newNumber)
      ? Obj.name.length !== 0
        ? filterData.length === 0
          ? noteServises
              .create(Obj)
              .then((response) => {
                setPersons(persons.concat(response)),
                  setDisplay(persons.concat(response));
              })
              .catch((error) => {
                console.log("problem with adding person", error);
              })
              .then((info) => {
                setMessage(`Added ${Obj.name} to the list`);
                setTimeout(() => {
                  setMessage(null);
                }, 4000);
              })
          : getName !== undefined
          ? window.confirm(
              `Do you want to change previous number : ${getName.number} for ${getName.name} with a new one?`
            )
            ? noteServises
                .update(getName.id, Obj)
                .then((updatedNumber) => {
                  const newestNumbers = persons.map((p) =>
                    p.id !== getName.id ? p : updatedNumber
                  );
                  setPersons(newestNumbers);
                  setDisplay(newestNumbers);
                  return updatedNumber;
                })
                .then((updatedNumber) => {
                  setMessage(
                    `Old number: ${getName.number} replaced with: ${updatedNumber.number} for ${updatedNumber.name}`
                  );
                  setTimeout(() => {
                    setMessage(null);
                  }, 5000);
                })
            : alert("Action canceled")
          : alert("Number already exist")
        : alert("Incorect name")
      : alert("Incorect phone number form, should look like XXX-XXX-XXX");
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
      <Notification message={message} />
      <h4>Search Person</h4>
      <Filter check={check} handleCheck={handleCheck} />
      <h4>Add new Person</h4>
      <Form
        handleNewName={handleNewName}
        handleNewPerson={handleNewPerson}
        handleNewPhone={handleNewPhone}
        newName={newName}
        newNumber={newNumber}
      />
      <div>
        <h2>Numbers</h2>
        <People persons={display} handleDelete={handleDelete} />
      </div>
    </div>
  );
};
export default App;
