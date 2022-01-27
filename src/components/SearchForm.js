import Input from "./Input";
import { useForm } from "react-hook-form";
import classes from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { getResultsThunk } from "../app/getResultsThunk";
import { LABEL_FIRST, LABEL_SECOND, INPUTS_NUMBER } from "../config";
import { searchAddressActions } from "../app/store";

function SearchForm(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const submitSearchHandler = async (data) => {
    dispatch(getResultsThunk(data));
  };

  const clearSearchHandler = () => {
    dispatch(searchAddressActions.resetResultsStatus());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitSearchHandler)}>
      <Input
        label={`${LABEL_FIRST}: `}
        register={register}
        registerName="input1"
        maxLength={30}
      />
      {INPUTS_NUMBER === 2 && (
        <Input
          label={`${LABEL_SECOND}: `}
          register={register}
          registerName="input2"
          maxLength={30}
        />
      )}
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
