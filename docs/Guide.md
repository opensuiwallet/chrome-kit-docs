---
order: 1
---

## Install

Install the npm package `@opensui/wallet-kit` to your project.

```shell
npm install @opensui/wallet-kit
# or
yarn add @opensui/wallet-kit
# or
pnpm install @opensui/wallet-kit
```

## Wrap

Use our `WalletProvider` to wrap your `<App />` as below.

```
import { WalletProvider } from "@opensui/wallet-kit";
import "@opensui/wallet-kit/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WalletProvider>
    <App />
    //...
  </WalletProvider>
);
```

## Connect

Just place our ui component `<ConnectButton />` to anywhere you like.

```
import { ConnectButton } from '@opensui/wallet-kit';

const App = () => {
  return (
    <>
      <...>
        <ConnectButton />
      </...>
      //...
    </>
  )
};
```

## Use Hooks

Once your dapp has been connected to a wallet that supports [Sui wallet-standard](https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter/packages/wallet-standard),
there are many wallet capabilities you can call by hoos.

```
import { useWallet, useAccountBalance } from '@opensui/wallet-kit';

const App = () => {
  const wallet = useWallet()
  const { balance } = useAccountBalance();

  useEffect(() => {
    if (!wallet.connected) return;
    console.log('connected wallet info: ', wallet)
    console.log('balance: ', balance)
  }, [wallet.connected])

  /*return (<.../>)*/
};
```

> Note that in addition to `recommended` our own wallet to the top, the following wallets will appear in `other` lists by defaults.
> - [Sui Wallet](https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil)
> - [Ethos Wallet](https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli)


## Example

Maybe you want to try a demo [demo playground](https://master.d2as2wgeia02l1.amplifyapp.com) .

> Our wallet has been trusted by great Sui projects as below:
> - [Clutchy](https://clutchy.io/)
> - [Scallop](https://scallop.io/)
> - [Suia](https://suia.io)
> - [MovEx](https://www.movex.exchange/)
> - [SuiSwap](https://suiswap.app/)
> - [Somis.xyz](https://somis.xyz/)

