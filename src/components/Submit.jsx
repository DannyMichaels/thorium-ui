/* React */
import React from "react";
/* Thorium-UI */
import { Button } from "./Button";

export const Submit = (props) => (
  <Button
    data-testid="th-submit"
    className="th-submit"
    animated={props.animated}
    size={props.size}
    stretch={props.stretch}
    type="submit"
    variant={props.variant}
  >
    {props.children}
  </Button>
);

export default Submit;
