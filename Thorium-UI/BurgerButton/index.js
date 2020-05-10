import React from "react";
import Button from "../Button";
import burgerIcon from "./icons/burger-icon-dark.svg";
import closeIcon from "./icons/close-icon-dark.svg";

class BurgerButton extends Button {
  constructor(props) {
    super(props);
    this.state = {
      target: null,
      active: false,
    };
    this.handleClick = (target) => {
      target.click();
      this.setState({ active: !this.state.active });
    };
  }

  render() {
    return (
      <Button
        variant={this.props.variant || "primary"}
        widthRef={this.props.widthRef}
        stretch={this.props.stretch}
        size={this.props.size}
        onClick={() =>
          this.handleClick(document.querySelector(`#${this.props.target}`))
        }
        style={this.props.style}
      >
        {!this.state.active && (
          // eslint-disable-next-line
          <img src={burgerIcon} draggable={false} onContextMenu ={(e) => e.preventDefault()} />
        )}
        {this.state.active && (
          // eslint-disable-next-line
          <img src={closeIcon} draggable={false} onContextMenu ={(e) => e.preventDefault()}/>
        )}
      </Button>
    );
  }
}

export default BurgerButton;
