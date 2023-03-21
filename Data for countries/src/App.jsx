import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ShowCountry from "./Components/ShowCountry.jsx";

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState([]);
  const url = "https://restcountries.com/v3.1/name";
  useEffect(() => {
    axios.get(`${url}/${country}`).then((response) => {
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
  const handleFlag = (id) => {
    const copy = countryData.find((n, index) => index === id);
    const lat = copy.capitalInfo.latlng[0];
    const lng = copy.capitalInfo.latlng[1];
    const part = "daily";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=${part}&appid=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }`
      )
      .then((response) => {
        const changedCountry = {
          ...copy,
          showFlag: !copy.showFlag,
          weather: { ...response.data },
        };
        const newData = countryData.map((n, index) =>
          index !== id ? n : changedCountry
        );
        // console.log("weather info", changedCountry.weather);
        // console.log("copied", changedCountry);
        setCountryData(newData);
      });
  };
  return (
    <React.Fragment>
      <div className="App">
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
