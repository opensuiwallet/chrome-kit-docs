---
order: 1
---

# Basic

## Import default CSS

You need to import the default CSS file to use the default styles.

:::tip
You may need a proper CSS loader to import CSS files. See [Webpack](https://webpack.js.org/loaders/css-loader/) or [Vite](https://vitejs.dev/guide/features.html#css) for more information.
:::

For example, import the default css file in the `src/index.jsx` file:

```
import * as React from "react";
import "@opensui/wallet-kit/style.css"; // Add this line to your code

// Your Application code below
function App() {
  return <div>...</div>;
}
```
