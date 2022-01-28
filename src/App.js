import classes from "./App.module.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { useSelector } from "react-redux";
import MapDisplay from "./components/MapDisplay";

function App() {
  const searchStatus = useSelector((state) => state.getResultsStatus);
  const coords = useSelector((state) => state.result.coords);

  return (
    <div className={classes.container}>
      <div className={classes.search_box}>
        <h2 className={classes.title}>SearchStreet</h2>
        <SearchForm />
        {searchStatus !== "" && <SearchResults />}
      </div>
      {searchStatus !== "" && coords.length !== 0 && <MapDisplay />}
    </div>
  );
}

export default App;
