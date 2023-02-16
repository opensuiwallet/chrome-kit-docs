---
order: 2
---

# Customize Wallet list

Follow this example to configure your wallet list on the select modal. We've prepared a set of wallets as below that you can import directly, also you can customize new wallet items. By default, we include all of them.

> - [Sui Wallet](https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil)
> - [Ethos Wallet](https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli)
> Note that all the `defaultWallets` will be listed in the other section on the wallet-select modal.

```
import {
  WalletKitProvider,
  OpenSuiWallet,
  SuiWallet,
  EthosWallet,
  MyDefaultWallet,
} from '@opensui/wallet-kit';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WalletKitProvider defaultWallets={[
      SuiWallet,
      EthosWallet,
      // ...
    ]}>
      //...
      <App />
    </WalletKitProvider>
  </React.StrictMode>
)
```

You can simply define it using our `createDefault` function if default wallet presets do not cover the wallets you need.

```
import {
  WalletKitProvider,
  createDefault,
} from '@opensui/wallet-kit';

// createDefault wallet must support @mysten/wallet-standard
const CustomizeWallet = createDefault({
  name: "myWallet",
  iconUrl: "external url or data url",
  downloadUrl: {
    browserExtension: 'download page url of chrome extension...'
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WalletKitProvider defaultWallets={[
      CustomizeWallet,
      // ...
    ]}>
      <App />
    </WalletKitProvider>
  </React.StrictMode>
)
```
