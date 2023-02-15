---
order: 1
---

# Configure Chain

Follow this example to configure the supported chains. If you provide a custom chain, please make sure that Sui support it.

```
import {
  WalletKitProvider,
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
  SuiDevnetChain,
  SuiTestnetChain,
  
  customChain,
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WalletKitProvider chains={SupportedChains}>
      <App />
    </WalletKitProvider>
  </React.StrictMode>
);
```
