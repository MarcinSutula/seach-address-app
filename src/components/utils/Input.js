import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input
        {...props.register(props.registerName)}
        maxLength={props.maxLength}
        required
      />
    </div>
  );
}

export default Input;
