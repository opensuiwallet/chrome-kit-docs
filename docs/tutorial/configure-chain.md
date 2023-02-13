---
order: 1
---

You can configure the supported chains (networks) for your dapp.

```
import {
  WalletProvider,
  Chain,
  SuiDevnetChain,
  SuiTestnetChain,
  DefaultChains,
} from "@opensui/wallet-kit";

const customChain: Chain = {
  id: "",
  name: "",
  rpcUrl: "",
};

const SupportedChains: Chain[] = [
  // ...DefaultChains,
  SuiDevnetChain,
  SuiTestnetChain,
  // NOTE: you can add custom chain (network),
  // but make sure the connected wallet does support it
  // customChain,
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WalletProvider chains={SupportedChains}>
      <App />
    </WalletProvider>
  </React.StrictMode>
);
```
