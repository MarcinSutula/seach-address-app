import classes from "./SearchResults.module.css";
import Result from "./Result";
import { useSelector } from "react-redux";
import Spinner from "../utils/Spinner";
import { LABEL_FIRST, LABEL_SECOND, INPUTS_NUMBER } from "../../config";

function SearchResults() {
  const results = useSelector((state) => state.searchResults);
  const searchStatus = useSelector((state) => state.getResultsStatus);

  return (
    <div className={classes.results_container}>
      <p>{`Wyniki: ${results.length}`} </p>
      <div className={classes.results_box}>
        <div className={classes.headrow}>
          <p className={classes.headrow_street_name}>{LABEL_FIRST}</p>
          <p>{INPUTS_NUMBER === 2 ? LABEL_SECOND : ""}</p>
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
