/* React */
import React, { useState } from "react";
/* Thorium-UI */
import { Block } from "./Block";
/* Style */
import { checkboxStyle as cbs } from "../styles/checkboxStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { justify } from "../utils/propValidation";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  defaultChecked: PropTypes.bool,
  justify: PropTypes.oneOf(justify),
  round: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(["lg", "sm"]),
  vertical: PropTypes.bool
};

const defaultProps = {
  defaultChecked: false,
  justify: "start",
  round: false,
  rounded: false,
  size: "lg",
  vertical: false
};

export const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(props.defaultChecked);
  const handleClick = () => setIsChecked(!isChecked);

  let style;
  props.size ? (style = cbs[props.size]) : (style = cbs.normal);
  props.rounded && (style.borderRadius = cbs.rounded);
  props.round && (style.borderRadius = cbs.round);

  return (
    <Block
      className="th-checkbox-container"
      data-testid="th-checkbox-container"
      justify={props.justify}
      style={{ paddingLeft: 0 }}
      vertical={props.vertical}
    >
      {props.label && (
        <label
          className="th-checkbox-label"
          data-testid="th-checkbox-label"
          form={props.form}
          htmlFor={props.id}
          style={style.label}
        >
          {props.label}
        </label>
      )}
      <div
        className="th-checkbox"
        data-testid="th-checkbox"
        style={{ ...cbs.general, ...style }}
        onClick={handleClick}
      >
        {isChecked && <span>&#10003;</span>}
        {!isChecked && <span>&nbsp;&nbsp;</span>}
      </div>

      <input
        {...mapPropsToAttrs(props, "input")}
        className="th-checkbox-hidden-input"
        data-testid="th-checkbox-hidden-input"
        type="hidden"
        value={isChecked}
      />
    </Block>
  );
};
Checkbox.defaultProps = defaultProps;
Checkbox.propTypes = propTypes;
export default Checkbox;
