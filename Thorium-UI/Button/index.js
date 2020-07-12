/* React */
import React, { Component } from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../";
/* Style */
import { buttonStyle as bs } from "../Styles";
/* Utils */
import { mapPropsToAttrs, validProps } from "../ThoriumUtils";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  animated: PropTypes.bool,
  size: PropTypes.string,
  stretch: PropTypes.bool,
  variant: PropTypes.oneOf(validProps.variants),
  disabled: PropTypes.bool,
};

const defaultProps = {
  animated: false,
  size: "normal",
  stretch: false,
  variant: "primary",
  disabled: false,
};

/**
 * Pre-styled, theme-dependant buttons
 */
export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isClicked: false,
      disabled: this.props.disabled || false,
    };

    this.handleMouseDown = () => {
      this.setState({ isClicked: true });
      this.props.onMouseDown && this.props.onMouseDown();
    };
    this.handleMouseUp = () => {
      this.setState({ isClicked: false });
      this.props.onMouseUp && this.props.onMouseUp();
    };
    this.handleClick = () => this.props.onClick && this.props.onClick();
    this.handleMouseEnter = () => {
      this.setState({ isHovered: true });
      this.props.onMouseEnter && this.props.onMouseEnter();
    };
    this.handleMouseLeave = () => {
      this.setState({ isHovered: false, isClicked: false });
      this.props.onMouseLeave && this.props.onMouseLeave();
    };
    this.handleTouchStart = () => {
      this.setState({ isClicked: true, isHovered: true });
      this.props.onMouseDown && this.props.onMouseDown();
    };
    this.handleTouchEnd = () => {
      this.setState({ isClicked: false, isHovered: false });
      this.props.onMouseUp && this.props.onMouseUp();
    };
  }

  render() {
    return (
      <ThoriumConsumer>
        {(context) => {
          // Build render style from props & state
          let rs = {
            ...bs.general,
            ...bs[this.props.size],
            ...context.theme.button[this.props.variant].normal,
          };

          if (this.state.isHovered) {
            rs = { ...rs, ...context.theme.button[this.props.variant].hover };
          }
          // Add respective animation when clicked
          if (this.props.animated && this.state.isClicked) {
            this.props.stretch
              ? (rs = { ...rs, ...bs.animate.normal })
              : (rs = { ...rs, ...bs.animate.stretch });
          }

          this.props.stretch && (rs = { ...rs, ...bs.stretch });
          this.props.disabled &&
            (rs = {
              ...rs,
              ...context.theme.button.disabled,
              cursor: "not-allowed",
            });

          return (
            /**
             * Buttons must be contained in a parent div to allow proper
             * sizing when set to "stretch"
             */
            <div style={{ position: "relative", width: rs.width }}>
              <button
                {...mapPropsToAttrs(this.props, "button")}
                disabled={this.state.disabled}
                onClick={this.handleClick}
                onMouseDown={this.handleMouseDown}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onMouseUp={this.handleMouseUp}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}
                ref={this.ref}
                style={{ ...rs, ...this.props.style }}
                data-testid="button"
              >
                {this.props.children}
              </button>
            </div>
          );
        }}
      </ThoriumConsumer>
    );
  }
}
Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default Button;
