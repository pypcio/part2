import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ShowCountry from "./Components/ShowCountry.jsx";

function App() {
  const [country, setCountry] = useState(null);
  const [countryData, setCountryData] = useState([]);
  const [countryInfo, setInfo] = useState([]);
  const url = "https://restcountries.com/v3.1/name";
  useEffect(() => {
    axios.get(`${url}/${country}`).then((response) => {
      // console.log(response.data);
      // if (response.data.length < 10) {

      // }
      // setCountryData(response.data);
      const temp = response.data.map((n) => {
        // console.log("kilka", n);
        return { ...n, showFlag: false };
      });
      // console.log("api", temp[0].showFlag);
      setCountryData(temp);
    });
  }, [country]);
  const handleCountry = (event) => {
    const cValue = event.target.value;
    setCountry(cValue);
  };
  const saveCountry = (event) => {
    event.preventDefault();
    const Obj = {
      name: countryData[0].name.common,
      capital: countryData[0].capital[0],
      languages: Object.values(countryData[0].languages),
      flag: countryData[0].flags.png,
      area: countryData[0].area,
    };
    const temp = [];
    temp.push(Obj);
    // const temp = Object.values(Obj);
    setInfo(temp);
    // console.log("data", Obj);
  };
  // console.log("country-info", countryInfo);
  // if (countryData.length === 1) {
  //   saveCountry();
  // }
  const handleFlag = (id) => {
    const copy = countryData.find((n, index) => index === id);
    console.log("copied", copy);
    const changedCountry = { ...copy, showFlag: !copy.showFlag };
    const newData = countryData.map((n, index) =>
      index !== id ? n : changedCountry
    );
    setCountryData(newData);
  };
  return (
    <React.Fragment>
      <div className="App">
        {/* <form onSubmit={saveCountry} className="formula">
        <input
          value={country}
          onChange={handleCountry}
          placeholder="Country"
        ></input>
        <button type="submit">save</button>
      </form> */}
        <input
          value={country}
          onChange={handleCountry}
          placeholder="Country"
        ></input>
        <ShowCountry countryData={countryData} handleFlag={handleFlag} />
      </div>
    </React.Fragment>
  );
}

export default App;
