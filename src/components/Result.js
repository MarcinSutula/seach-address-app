import classes from "./Result.module.css";

function Result(props) {
  const zoomInHandler = () => {
    console.log(props.result);
  };

  return (
    <li
      key={props.i}
      className={classes.result_container}
      style={{
        backgroundColor: (props.i + 1) % 2 === 0 ? "#d3d3d3" : "#F5F5F5",
      }}
    >
      <p className={classes.row_street_name}>{props.result.attributes.ulica}</p>
      <p style={{ marginLeft: props.resultsLength > 4 ? "46px" : "40px" }}>
        {props.result.attributes.numerPorza}
      </p>
      <button
        style={{ marginRight: props.resultsLength > 4 ? "0px" : "15px" }}
        onClick={zoomInHandler}
      >
        przybliż
      </button>
    </li>
  );
}

export default Result;
