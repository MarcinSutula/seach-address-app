import classes from "./App.module.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { useSelector } from "react-redux";

function App() {
  const searchStatus = useSelector((state) => state.getResultStatus);

  return (
    <div className={classes.container}>
      <div className={classes.search_box}>
        <div className={classes.title}>SearchStreet</div>
        <SearchForm />
        {searchStatus !== "" && <SearchResults />}
      </div>
      <div className={classes.map}>mapa</div>
    </div>
  );
}

export default App;
