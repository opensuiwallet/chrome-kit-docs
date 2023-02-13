---
order: 1
---

OpenSui wallet kit is a wallet aggregator for DApps to interact with all the wallets in Sui ecosystem easily. 

Let's try our kit and empower your dapp in minutes. 

> Here is an example [Demo Playground](https://master.d2as2wgeia02l1.amplifyapp.com/)

## Setup

First of all, let's install the npm package `@opensui/wallet-kit` to your project.

> npm package: https://www.npmjs.com/package/@opensui/wallet-kit

```shell
npm install @opensui/wallet-kit
# or
yarn add @opensui/wallet-kit
# or
pnpm install @opensui/wallet-kit
```

Then wrap your `<App />` with our context provider, so that our hooks can work nicely inside your dapp.

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
- [Martian Wallet](https://chrome.google.com/webstore/detail/martian-wallet-aptos-sui/efbglgofoippbgcjepnhiblaibcnclgk)
- [Surf Wallet](https://chrome.google.com/webstore/detail/surf-sui-wallet/emeeapjkbcbpbpgaagfchmcgglmebnen)
- [Glass Wallet](https://chrome.google.com/webstore/detail/glass-wallet-sui-wallet/loinekcabhlmhjjbocijdoimmejangoa)
- [Morphis Wallet](https://chrome.google.com/webstore/detail/morphis-wallet/heefohaffomkkkphnlpohglngmbcclhi)
- [OneKey Wallet](https://chrome.google.com/webstore/detail/onekey/jnmbobjmhlngoefaiojfljckilhhlhcj)
- [BitKeep Wallet](https://chrome.google.com/webstore/detail/bitkeep-crypto-nft-wallet/jiidiaalihmmhddjgbnbgdfflelocpak/related)

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

After your dapp connects to a wallet that supports [Sui wallet-standard](https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter/packages/wallet-standard), your dapp is already empowered and able to call wallet capabilities.

> Please explore the docs for further usage information 

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

Continue to BUILD your amazing dapp and join the incoming Sui-nami! 

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
