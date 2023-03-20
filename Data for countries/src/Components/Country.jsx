const Country = ({ countryInfo }) => {
  // if (toggle !== undefined) {
  //   toggle();
  // }
  // console.log("inside country", countryInfo);
  const countryStyle = {
    border: "solid black 1px",
  };
  if (countryInfo.length === 0) {
    return null;
  }
  const country = countryInfo;
  // console.log("zestawienie", countryInfo);
  console.log("pokaz flage", country.showFlag);
  if (country.showFlag) {
    // console.log("data", country);
    return (
      <div style={countryStyle}>
        <h1>{country.name.common}</h1>
        <p>capital: {country.capital}</p>
        <p>area: {country.area} km2</p>
        <h4>Languages:</h4>
        <ul>
          {Object.values(country.languages).map((l, index) => {
            return <li key={index}>{l}</li>;
          })}
        </ul>
        <img src={`${country.flags.png}`} alt="flag" className="img" />
      </div>
    );
  } else {
    // console.log("test", country);
    return <p>{country.name.common}</p>;
  }
  // const valuesArray = Object.values(countryInfo[0]);
};

export default Country;
