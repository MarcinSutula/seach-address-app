import classes from "./Spinner.module.css";

function Spinner(props) {
  return (
    <div className={classes.container}>
      <div className={props.big ? classes.spinner_big : classes.spinner}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            focusable="false"
          >
            <circle
              cx="14"
              cy="14"
              r="12"
              fill="none"
              stroke="#000"
              strokeWidth="4"
              opacity=".15"
            />
            <circle
              pathLength="1"
              cx="14"
              cy="14"
              r="12"
              fill="none"
              stroke="#01c09a"
              strokeWidth="4"
              strokeDasharray="27 57"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
export default Spinner;
