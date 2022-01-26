import classes from "./Result.module.css";

function Result(props) {
  return (
    <li
      key={props.i}
      className={classes.result_container}
      style={{
        backgroundColor: (props.i + 1) % 2 === 0 ? "#d3d3d3" : "#F5F5F5",
      }}
    >
      <p className={classes.row_street_name}>{props.result.streetName}</p>
      <p style={{ marginLeft: props.resultsLength > 4 ? "46px" : "40px" }}>
        {props.result.streetNumber}
      </p>
      <button style={{ marginRight: props.resultsLength > 4 ? "0px" : "15px" }}>
        przybliż
      </button>
    </li>
  );
}

export default Result;
