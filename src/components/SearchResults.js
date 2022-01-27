import classes from "./SearchResults.module.css";
import Result from "./Result";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

function SearchResults() {
  const results = useSelector((state) => state.searchResults);
  const searchStatus = useSelector((state) => state.getResultStatus);

  // const DUMMY_RESULTS = [
  //   {
  //     streetName: "Kowalewska",
  //     streetNumber: "12",
  //   },
  //   {
  //     streetName: "Kowalewskaaaaaaa",
  //     streetNumber: "122",
  //   },
  //   {
  //     streetName: "Kowalewska",
  //     streetNumber: "1222",
  //   },
  //   {
  //     streetName: "Kowalewska",
  //     streetNumber: "12",
  //   },
  //   {
  //     streetName: "Kowalewska",
  //     streetNumber: "12",
  //   },
  //   {
  //     streetName: "Kowalewska",
  //     streetNumber: "12",
  //   },
  // ];

  return (
    <div className={classes.results_container}>
      <p>Wyniki: </p>
      <div className={classes.results_box}>
        <div className={classes.headrow}>
          <p className={classes.headrow_street_name}>Ulica</p>
          <p>Numer</p>
          <p className={classes.headrow_zoom}>Przybliż</p>
        </div>
        {searchStatus === "loading" && <Spinner big={true} />}
        {searchStatus === "success" && (
          <ul>
            {results.map((result, index) => {
              return (
                <Result
                  key={index}
                  i={index}
                  result={result}
                  resultsLength={results.length}
                />
              );
            })}
          </ul>
        )}
        {searchStatus === "no results" && <h1>Brak wyników</h1>}
      </div>
    </div>
  );
}

export default SearchResults;
