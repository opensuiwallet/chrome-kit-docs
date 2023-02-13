---
order: 1
---

#### OpenSui wallet kit is a connector used to interact with all wallets in Sui ecosystem.

Let's try it in minutes. 

## Setup

Firstly, install the npm package `@opensui/wallet-kit` to your project.

> npm package: https://www.npmjs.com/package/@opensui/wallet-kit

```shell
npm install @opensui/wallet-kit
# or
yarn add @opensui/wallet-kit
# or
pnpm install @opensui/wallet-kit
```

Secondly, wrap your `<App />` with our context provider, so that hooks can work.

```
import { WalletProvider } from "@opensui/wallet-kit";
import "@opensui/wallet-kit/style.css";

// take react@18 project as an example
ReactDOM.createRoot(document.getElementById("root")).render(
  <WalletProvider>
    <App />
  </WalletProvider>
);
```

These preset wallets will be displayed as `Recommend` on our kit modal by default.

- [OpenSui Wallet](https://chrome.google.com/webstore/detail/opensui-wallet/okpkllndemhiakppbmccjbilpekhjgeb)
- [Sui Wallet](https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil)
- [Ethos Wallet](https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli)

## Place ConnectButton

Just import our `<ConnectButton />` and place it to wherever you like, such as Header.

```
import { ConnectButton } from '@opensui/wallet-kit';

const App = () => {
  return (
    <>
      <header>
        <ConnectButton />
      </header>
      {/*<... />*/}
    </>
  )
};
```

## Use Wallet Capabilities

After your dapp connects to a wallet that supports [Sui wallet-standard](https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter/packages/wallet-standard), 
your dapp is already empowered and able to call wallet capabilities.

```
import { useWallet } from '@opensui/wallet-kit';

const App = () => {
  const wallet = useWallet()

  useEffect(() => {
    if (!wallet.connected) return;
    console.log('connected wallet name: ', wallet.name)
    console.log('account address: ', wallet.account?.address)
    console.log('account publicKey: ', wallet.account?.publicKey)
  }, [wallet.connected])

  async function handleExecuteMoveCall() {
    await wallet.executeMoveCall(/*...*/);
  }
  async function handleExecuteTransaction() {
    await wallet.signAndExecuteTransaction(/*...*/);
  }
  async function handleSignMessage() {
    await wallet.signMessage(/*...*/);
  }

  /*return (<.../>)*/
};
```

## More Tutorials

Check out this section: [#Tutorials](/tutorial/configure-chain)

## Demo Playground

Feel free to play with our [Demo Playground](https://master.d2as2wgeia02l1.amplifyapp.com) 

## Trusted by great Sui projects

- [Clutchy](https://clutchy.io/)
- [Scallop](https://scallop.io/)
- [Suia](https://suia.io)
- [MovEx](https://www.movex.exchange/)
- [SuiSwap](https://suiswap.app/)
- [Somis.xyz](https://somis.xyz/)

<img src="/partner.png" width="600px"/>
