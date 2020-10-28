![thorium logo](https://i.ibb.co/6y2RSZf/banner.png)
[![NPM](https://nodei.co/npm/thorium-ui.png)](https://npmjs.org/package/thorium-ui)

# Overview

Thorium-UI is designed to be an intuitive React.js framework, with which to quickly build themed applications, without needing a ton of CSS clutter.

## Documentation

[View the Official Documentation](https://thorium-ui.jpuls.dev)  
**_Please note, this documentation is only updated periodically and does not always represent the current state of the project_**

# Getting Started

Use the following instructions to get up and running with Thorium-UI.

## Installation

```bash
npm i thorium-ui
```

## Using ThoriumRoot

Once you've successfully installed `thorium-ui`, some very minimal boilerplate is needed to get up and running.

1. In your `App.jsx` file, begin by importing the `ThoriumRoot` component from `thorium-ui`.
2. Wrap the `ThoriumRoot` around the rest of your `App` contents.
3. _(optional)_ If you're using `customThemes` or `customStyles`, import them at the top of your `App.jsx` file, and pass them as corresponding props to `ThoriumRoot`.

Your `App.jsx` file should look like the following.

```javascript
import React from "react";
import { ThoriumRoot } from "thorium-ui";
import customStyles from "customStyles.js";
import customThemes from "customThemes.js";

export const App = (props) => {
  return (
    <ThoriumRoot customStyles={customStyles} customThemes={customThemes}>
      /* YOUR COMPONENTS HERE */
    </ThoriumRoot>
  );
};
export default App;
```

## Thats It!

With that finished, you're now ready to begin using `Thorium-UI`!
