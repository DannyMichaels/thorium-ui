import React from "react";
import { Block } from "./Block";
import { dropdownMenuStyle as dms } from "../styles/dropdownMenuStyle";
import { useTheme } from "../hooks/thoriumRoot/useTheme";

export const DropdownMenu = (props) => {
  const theme = useTheme();
  let style = { ...dms.general, ...theme.dropdown.menu };

  if (props.active) style = { ...style, ...dms[props.displayType].active };
  else style = { ...style, ...dms[props.displayType].inactive };
  props.displayType === "float" && (style.top = props.top);
  props.scrollable && props.height && (style.overflowY = "auto");
  props.height && (style.height = props.height);

  return (
    <Block
      className="th-dropdown-menu"
      data-testid="th-dropdown-menu"
      all={12}
      style={style}
      vertical
    >
      {props.children}
    </Block>
  );
};
export default DropdownMenu;
