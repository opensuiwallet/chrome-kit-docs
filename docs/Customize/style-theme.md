---
order: 4
---

# Style Theme

You need to import the default CSS in the `src/index.jsx` file to use the default styles.

```
import * as React from "react";
import "@opensui/wallet-kit/style.css"; // default styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <WalletKitProvider>
    <App />
    //...
  </WalletKitProvider>
);
```

If you want to customize the theme of the components, use CSS variables to define colors and other styles like below.

```scss
:root {
  --osw-accent-hs: 110, 100%; // override accent color

  ... // other CSS variables
}

.osw-button {
  height: 80px; // override the height of the button
}

//...
```

Your customized css file must be imported **after** the default CSS file.

```
import "@opensui/wallet-kit/dist/style.css";
import "./opensui-wallet-kit-custom.css";
```


Below is a list of all CSS variables that you can use as public API to customize the look of the components.

| CSS Variables               | Descriptions                                           | Default Value                |
| --------------------------- | ------------------------------------------------------ | ---------------------------- |
| `--osw-accent-hs`          | The hue and saturation components of the accent color. | `210, 100%`                  |
| `--osw-on-accent-rgb`      | The RGB value of the color on the accent color.        | `255, 255, 255`              |
| `--osw-bg-rgb`             | The RGB value of the background color.                 | `239, 241, 245`              |
| `--osw-on-bg-rgb`          | The RGB value of the color on the background color.    | `10, 14, 34`                 |
| `--osw-font-family`        | The font-family of the components.                     | `'Inter', sans-serif`        |
| `--osw-font-family-mono`   | The font-family of the components (monospace).         | `'IBM Plex Mono', monospace` |
| `--osw-font-size-large`    | The font-size of the components (L).                   | `18px`                       |
| `--osw-font-size-medium`   | The font-size of the components (M).                   | `16px`                       |
| `--osw-font-size-small`    | The font-size of the components (S).                   | `14px`                       |
| `--osw-line-height-large`  | The line-height of the components (L).                 | `22px`                       |
| `--osw-line-height-medium` | The line-height of the components (M).                 | `20px`                       |
| `--osw-line-height-small`  | The line-height of the components (S).                 | `17px`                       |
| `--osw-button-width`       | The width of the button.                               | `284px`                      |
| `--osw-border-radius`      | The border radius of the components.                   | `16px`                       |
