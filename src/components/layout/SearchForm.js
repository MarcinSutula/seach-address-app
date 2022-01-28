import Input from "../utils/Input";
import { useForm } from "react-hook-form";
import classes from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { getResultsThunk } from "../../app/getResultsThunk";
import {
  LABEL_FIRST,
  LABEL_SECOND,
  INPUTS_NUMBER,
  INPUT1_MAX_LENGTH,
  INPUT2_MAX_LENGTH,
} from "../../config";
import { searchAddressActions } from "../../app/store";

function SearchForm(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const submitSearchHandler = async (data) => {
    dispatch(getResultsThunk(data));
  };

  const clearSearchHandler = () => {
    dispatch(searchAddressActions.resetResults());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitSearchHandler)} className={classes.form}>
      <Input
        label={`${LABEL_FIRST}: `}
        register={register}
        registerName="input1"
        maxLength={INPUT1_MAX_LENGTH}
      />
      {INPUTS_NUMBER === 2 && (
        <Input
          label={`${LABEL_SECOND}: `}
          register={register}
          registerName="input2"
          maxLength={INPUT2_MAX_LENGTH}
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
