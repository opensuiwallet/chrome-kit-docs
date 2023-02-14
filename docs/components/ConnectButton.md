---
order: 2
---

# ConnectButton

ConnectButton is a component with UI, which has bound events and can be released to the page to directly connect to the wallet plug-in. We recommend using `ConnectButton` component to integrate OpenSui wallet kit. 

## Usage

```
import { ConnectButton, WalletProvider } from "@opensui/wallet-kit";

function App() {
  return (
    <WalletProvider>
      //...
      <ConnectButton>Connect Wallet</ConnectButton>
      //...
    </WalletProvider>
  );
}
```

## Props

| Properties | Description | Type                | Default          |
| ---------- | ----------- | ------------------- | ---------------- |
| children   | --          | ReactNode           | 'Connect Wallet' |
| style      | --          | React.CSSProperties |                  |
| className  | --          | string              |                  |
