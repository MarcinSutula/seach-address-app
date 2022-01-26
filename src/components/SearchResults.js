import { useState } from "react";
import classes from "./SearchResults.module.css";
import Result from "./Result";

function SearchResults() {
  const [results, setResults] = useState();

  const DUMMY_RESULTS = [
    {
      streetName: "Kowalewska",
      streetNumber: "12",
    },
    {
      streetName: "Kowalewskaaaaaaa",
      streetNumber: "122",
    },
    {
        streetName: "Kowalewska",
        streetNumber: "1222",
      },
      {
        streetName: "Kowalewska",
        streetNumber: "12",
      },
      {
        streetName: "Kowalewska",
        streetNumber: "12",
      },
      {
        streetName: "Kowalewska",
        streetNumber: "12",
      },
    
  ];

  return (
    <div className={classes.results_container}>
      <p>Wyniki: </p>
      <div className={classes.results_box}>
        <div className={classes.headrow}>
          <p className={classes.headrow_street_name}>Ulica</p>
          <p>Numer</p>
          <p className={classes.headrow_zoom}>Przybliż</p>
        </div>
        <ul>
          {DUMMY_RESULTS.map((result, index) => {
            return (
              <Result
                key={index}
                i={index}
                result={result}
                resultsLength={DUMMY_RESULTS.length}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchResults;
