import classes from "./Result.module.css";
import { INPUTS_NUMBER } from "../config";
import { useDispatch } from "react-redux";
import { searchAddressActions } from "../app/store";

function Result(props) {
  const dispatch = useDispatch();

  const zoomInHandler = () => {
    dispatch(searchAddressActions.setCoords(props.result.geometry));
  };

  const getValueFromObjByIndex = (obj, index) => Object.values(obj)[index];

  return (
    <li
      key={props.i}
      className={classes.result_container}
      style={{
        backgroundColor: (props.i + 1) % 2 === 0 ? "#d3d3d3" : "#F5F5F5",
      }}
    >
      <p className={classes.row_street_name}>
        {getValueFromObjByIndex(props.result.attributes, 0)}
      </p>
      <p style={{ marginLeft: props.resultsLength > 4 ? "46px" : "40px" }}>
        {INPUTS_NUMBER === 2
          ? getValueFromObjByIndex(props.result.attributes, 1)
          : ""}
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
