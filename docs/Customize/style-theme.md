---
order: 4
---

# Style Theme

You need to import the default CSS in the `src/index.jsx` file to use the default styles.

```
import * as React from "react";
import "@opensui/wallet-kit/style.css"; // default styles

// Your Application code below
ReactDOM.createRoot(document.getElementById("root")).render(
  <WalletProvider>
    <App />
    //...
  </WalletProvider>
);
```

If you want to customize the theme of the components, use CSS variables to define colors and other styles like below.

```scss
:root {
  --wkit-accent-hs: 110, 100%; // override accent color

  ... // other CSS variables
}

.wkit-button {
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
| `--wkit-accent-hs`          | The hue and saturation components of the accent color. | `210, 100%`                  |
| `--wkit-on-accent-rgb`      | The RGB value of the color on the accent color.        | `255, 255, 255`              |
| `--wkit-bg-rgb`             | The RGB value of the background color.                 | `239, 241, 245`              |
| `--wkit-on-bg-rgb`          | The RGB value of the color on the background color.    | `10, 14, 34`                 |
| `--wkit-font-family`        | The font-family of the components.                     | `'Inter', sans-serif`        |
| `--wkit-font-family-mono`   | The font-family of the components (monospace).         | `'IBM Plex Mono', monospace` |
| `--wkit-font-size-large`    | The font-size of the components (L).                   | `18px`                       |
| `--wkit-font-size-medium`   | The font-size of the components (M).                   | `16px`                       |
| `--wkit-font-size-small`    | The font-size of the components (S).                   | `14px`                       |
| `--wkit-line-height-large`  | The line-height of the components (L).                 | `22px`                       |
| `--wkit-line-height-medium` | The line-height of the components (M).                 | `20px`                       |
| `--wkit-line-height-small`  | The line-height of the components (S).                 | `17px`                       |
| `--wkit-button-width`       | The width of the button.                               | `284px`                      |
| `--wkit-border-radius`      | The border radius of the components.                   | `16px`                       |
