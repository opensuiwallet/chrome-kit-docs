---
order: 1
---

# WalletProvider

We support a `WalletProvider` using [React Context API](https://reactjs.org/docs/context.html#contextprovider) to provide the essential data and functions.
Meanwhile, if you want to customize our kit, you must start here. It means you need to wrap all the kit hooks and components under `WalletProvider` before you start to use them.

## Usage

```
import ReactDOM from "react-dom";
import { WalletProvider } from "@opensui/wallet-kit";

function Root() {
  <WalletProvider>
    <App />
    //...
  </WalletProvider>;
}

ReactDOM.render(<Root />, docoument.getElementById("root"));
```

After that, you can customize [chain](/customize/chain), or called network and customize the default [wallet list](/customize/wallet-list) as you like.


## Props

|             Prop              |                     Type                     |                      Default                       |                                              Description                                               |
| :---------------------------: | :------------------------------------------: | :------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|        defaultWallets         | [IDefaultWallet](/customize/types#idefaultwallet) | [...AllPresetWallets] |               Configure wallet list for dapp, by default we load all the preset wallets                |
|            chains             |         [Chain](/customize/types#Chain)[]         |         [DefaultChains](/customize/types#Chain)         |                             Configure supported chains (networks) for dapp                             |
|          autoConnect          |                   boolean                    |                        true                        |                        Auto connect to the last connected wallet when launched                         |
