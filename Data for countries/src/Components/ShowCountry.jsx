import Country from "./Country.jsx";
const ShowCountry = ({ countryData, handleFlag }) => {
  if (countryData.length !== 0) {
    // console.log("list ", countryData[0].showFlag);
  }
  if (countryData.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else {
    if (countryData.length !== 1) {
      return (
        <div>
          {countryData.map((c, index) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Country key={index} countryInfo={c} />
                <button
                  onClick={() => {
                    handleFlag(index);
                  }}
                >
                  show
                </button>
              </div>
            );
          })}
        </div>
      );
    } else {
      if (countryData[0].showFlag === false) {
        handleFlag(0);
      }
      return <Country countryInfo={countryData[0]} />;
    }
  }
};

export default ShowCountry;
