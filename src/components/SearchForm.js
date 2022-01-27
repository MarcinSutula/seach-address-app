import Input from "./Input";
import { useForm } from "react-hook-form";
import classes from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { getResultsThunk } from "../app/getResultsThunk";

function SearchForm(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const submitSearchHandler = async (data) => {
    dispatch(getResultsThunk(data));
  };

  const clearSearchHandler = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitSearchHandler)}>
      <Input
        label="Ulica: "
        register={register}
        registerName="streetName"
        maxLength={30}
      />
      <Input
        label="Numer: "
        register={register}
        registerName="streetNumber"
        maxLength={6}
      />
      <div className={classes.button_container}>
        <button>Szukaj</button>
        <button type="button" onClick={clearSearchHandler}>
          Wyczyść
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
