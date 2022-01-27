import classes from "./App.module.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { useSelector } from "react-redux";

function App() {
  const searchStatus = useSelector((state) => state.getResultsStatus);

  return (
    <div className={classes.container}>
      <div className={classes.search_box}>
        <h2 className={classes.title}>SearchStreet</h2>
        <SearchForm />
        {searchStatus !== "" && <SearchResults />}
      </div>
      <div className={classes.map}>mapa</div>
    </div>
  );
}

export default App;
