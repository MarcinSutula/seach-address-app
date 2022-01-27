import { Modal } from "@mui/material";
import { useForm } from "react-hook-form";
import classes from "./OptionsModal.module.css";

function OptionsModal(props) {
  const {
    register,
    handleSubmit,
    reset,
    
  } = useForm();

  const optionsModalOnCloseHandler = () => {
    props.setShowOptionsModal(false);
    reset();
  };

  const optionsSubmitHandler = (data) => {
    if (data.query1 === "DEFAULT" || data.query2 === "DEFAULT") return;

    console.log(data);




    reset();
  };

  const bodyModal = (
    <div className={classes.modal_container}>
      <form onSubmit={handleSubmit(optionsSubmitHandler)}>
        <div className={classes.query_container}>
          <label>Query 1: </label>
          <select {...register("query1")} defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled hidden>
              Choose here
            </option>
            <option>miasto</option>
          </select>
        </div>
        <div className={classes.query_container}>
          <label>Query 2: </label>
          <select {...register("query2")} defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled hidden>
              Choose here
            </option>
            <option>kod pocztowy</option>
          </select>
        </div>
        <div className={classes.btn_container}>
          <button>Confirm</button>
          <button type="button" onClick={optionsModalOnCloseHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <Modal open={props.showOptionsModal} onClose={optionsModalOnCloseHandler}>
      {bodyModal}
    </Modal>
  );
}

export default OptionsModal;
