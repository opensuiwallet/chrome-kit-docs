---
order: 2
---

# ConnectWalletButton

ConnectWalletButton is a component with UI, which has bound events and can be released to the page to directly connect to the wallet plug-in. We recommend using `ConnectWalletButton` component to integrate OpenSui wallet kit. 

## Usage

```
import { ConnectWalletButton, WalletKitProvider } from "@opensui/wallet-kit";

function App() {
  return (
    <WalletKitProvider>
      //...
      <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
      //...
    </WalletKitProvider>
  );
}
```

## Props

| Properties | Description | Type                | Default          |
| ---------- | ----------- | ------------------- | ---------------- |
| children   | Text for button | ReactNode           | 'Connect Wallet' |
| style      | Override button style  | React.CSSProperties |                  |
| className  | External className | string              |                  |
