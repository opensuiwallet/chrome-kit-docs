---
order: 1
---

# WalletKitProvider

We support a `WalletKitProvider` using [React Context API](https://reactjs.org/docs/context.html#contextprovider) to provide the essential data and functions.
Meanwhile, if you want to customize our kit, you must start here. It means you need to wrap all the kit hooks and components under `WalletKitProvider` before you start to use them.

## Usage

```
import ReactDOM from "react-dom";
import { WalletKitProvider } from "@opensui/wallet-kit";

function Root() {
  <WalletKitProvider>
    <App />
    //...
  </WalletKitProvider>;
}

ReactDOM.render(<Root />, docoument.getElementById("root"));
```

After that, you can customize [chain](/customize/chain), or called network and customize the default [wallet list](/customize/wallet-list) as you like.


## Props

|             Prop              |                     Type                     |                      Default                       |                                              Description                                               |
| :---------------------------: | :------------------------------------------: | :------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|        defaultWallets         | [IDefaultWallet](/customize/types#idefaultwallet) | [...AllPresetWallets] |                Wallet list for dapp, by default we load all the preset wallets                |
|            chains             |         [Chain](/customize/types#Chain)[]         |         [DefaultChains](/customize/types#Chain)         |                              Supported chains for dapp                             |
|          autoConnect          |                   boolean                    |                        true                        |                        Auto connect to the last connected wallet when launched                         |
