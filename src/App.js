import classes from "./App.module.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.search_box}>
        <div className={classes.title}>SearchStreet</div>
        <SearchForm />
        <SearchResults />
      </div>
      <div className={classes.map}>mapa</div>
    </div>
  );
}

export default App;
