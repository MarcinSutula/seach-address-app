import Input from "./Input";
import { useForm } from "react-hook-form";
import classes from "./SearchForm.module.css";

function SearchForm(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitSearchHandler = (data) => {
    console.log(data);
  };

  const clearSearchHandler = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitSearchHandler)}>
      <Input label="Ulica: " register={register} registerName="streetName" />
      <Input label="Numer: " register={register} registerName="streetNumber" />
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
