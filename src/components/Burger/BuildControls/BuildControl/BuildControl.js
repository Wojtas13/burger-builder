import React from "react";
import PropTypes from "prop-types";
import classes from "./BuildControl.css";

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      -
    </button>
    <button className={classes.More} onClick={props.added}>
      +
    </button>
  </div>
);

BuildControl.PropType = {
  label: PropTypes.string,
  removed: PropTypes.func,
  disabled: PropTypes.func,
  added: PropTypes.func
};

export default BuildControl;
