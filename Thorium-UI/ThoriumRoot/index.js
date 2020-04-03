import React, { Component } from "react";
import ThoriumContext from "../ThoriumContext";
import themes from "../themes";
import init from "../ThoriumUtils/thoriumInit";
import { updateVpName } from "../ThoriumUtils/updateVpName";
import { updateBodyStyle } from "../ThoriumUtils/updateBodyStyle";

class ThoriumRoot extends Component {
  constructor(props) {
    super(props);
    // Get initial styling data before render
    this.initData = init();

    // If a custom theme was found, append to current theme
    if (this.initData.customThemes) {
      this.defaultTheme = {
        ...themes[this.props.defaultTheme],
        ...this.initData.customThemes[this.props.defaultTheme]
      };
    }
    this.state = {
      viewportWidth: window.innerWidth,
      viewportSizeName: updateVpName(window.innerWidth),
      theme: this.defaultTheme || themes[props.defaultTheme]
    };

    // Provide a way for children to modify the theme through Context
    this.setTheme = data => {
      this.setState({ theme: data });
    };

    // Updates the viewport state properties when the window is resized past a breakpoint
    this.handleResize = () => {
      if (updateVpName(window.innerWidth) !== this.state.viewportSizeName) {
        this.setState({
          viewportWidth: window.innerWidth,
          viewportSizeName: updateVpName(window.innerWidth)
        });
      }
    };
    window.addEventListener("resize", this.handleResize);
  }

  // Remove the listener if re-rendered (memory leak cleanup)
  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  render() {
    // Body styling must be done explicitly as it resides outside of the ThroiumRoot component
    updateBodyStyle(this.state.theme.body, this.initData.customThemes);

    // Set up Context to be passed to children
    const context = {
      viewportWidth: this.state.viewportWidth,
      viewportSizeName: this.state.viewportSizeName,
      theme: this.state.theme,
      setTheme: this.setTheme,
      ...this.initData
    };

    return (
      <ThoriumContext.Provider value={context}>
        <thorium-root
          id="thorium-root"
          className="thorium-root"
          style={{ boxSizing: "border-box", ...this.props.style }}
        >
          {this.props.children}
        </thorium-root>
      </ThoriumContext.Provider>
    );
  }
}

export default ThoriumRoot;
