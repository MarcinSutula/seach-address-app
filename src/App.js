import classes from "./App.module.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { useSelector } from "react-redux";
import { optionsIcon } from "./components/OptionsIcon";
import { useState, Fragment } from "react";
import OptionsModal from "./components/OptionsModal";

function App() {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const searchStatus = useSelector((state) => state.getResultStatus);

  const optionsOnClickHandler = () => {
    setShowOptionsModal(true);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.search_box}>
          <div className={classes.title}>
            <h2>SearchStreet</h2>
            <div className={classes.options} onClick={optionsOnClickHandler}>
              {optionsIcon}
            </div>
          </div>
          <SearchForm />
          {searchStatus !== "" && <SearchResults />}
        </div>
        <div className={classes.map}>mapa</div>
      </div>
      <OptionsModal
        showOptionsModal={showOptionsModal}
        setShowOptionsModal={setShowOptionsModal}
      />
    </Fragment>
  );
}

export default App;
