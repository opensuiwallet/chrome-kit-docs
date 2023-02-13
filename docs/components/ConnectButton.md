---
order: 1
---

# ConnectButton

## Description

ConnectButton is a component with UI, which has bound events and can be released to the page to directly connect to the wallet plug-in.

We recommend using `ConnectButton` component to integrate OpenSui wallet kit. You can also customize the ConnectButton with our api, check [#Use Hooks Only](/tutorial/hooks-only) for details.

## Examples

```
import { ConnectButton, WalletProvider } from "@opensui/wallet-kit";

function App() {
  return (
    <WalletProvider>
      <ConnectButton>Connect Wallet</ConnectButton>
    </WalletProvider>
  );
}
```

## API

### Props

| Properties | Description | Type                | Default          |
| ---------- | ----------- | ------------------- | ---------------- |
| children   | --          | ReactNode           | 'Connect Wallet' |
| style      | --          | React.CSSProperties |                  |
| className  | --          | string              |                  |
