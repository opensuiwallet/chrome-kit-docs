---
order: 1
---

# useWalletKit

Maybe `useWalletKit` is the most useful [React Hook]((https://reactjs.org/docs/hooks-intro.html)). You can get properties and call functions of a connected wallet before [WalletKitProvider](/docs/components/walletprovider) fetch all the properties and functions. 

Don't forget to run it in a React component under `WalletKitProvider`.

## Usage

```
import { useWalletKit } from "@opensui/wallet-kit";

function App() {
  const wallet = useWalletKit();
  console.log("wallet status", wallet.status);
}
```

### Transaction

There are many types of [signable transaction](https://github.com/MystenLabs/sui/blob/e45b188a80a067700efdc5a099745f18e1f41aac/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts#L98) defined by Sui, such as `moveCall`, `transferSui` etc.

Here is a simple example for nft minting that invoke `moveCall` transaction, refers to [sample contract of Sui](https://examples.sui.io/samples/nft.html).

```
import {useWalletKit} from '@opensui/wallet-kit'

function App() {
  const wallet = useWalletKit();

  async function handleSignAndExecuteTx() {
		if (!wallet.connected) return
		
    try {
      const resData = await wallet.signAndExecuteTransaction({
        transaction: {
          kind: 'moveCall',
          data: {
            packageObjectId: '0x2',
            module: 'devnet_nft',
            function: 'mint',
            typeArguments: [],
            arguments: [
              'name',
              'capy',
              'https://www.google.com.hk/url?sa=i&url=https%3A%2F%2Fwww.logodesign.net%2F&psig=AOvVaw22H35jGIzOl5dCqlsDrTrt&ust=1676481550255000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPDS7s3Clf0CFQAAAAAdAAAAABAD',
            ],
            gasBudget: 10000,
          }
        }
      });
      console.log('nft minted successfully!', resData);
    } catch (e) {
      console.error('nft mint failed', e);
    }
  }

  return (
  	<>
    	<button onClick={handleSignAndExecuteTx}>Mint NFT</button>
    </>
  )
}
```


### Event

You can listen to the event from wallet app, such as network switching, account switching. Take network switching event as an example:

```
import { useWalletKit } from "@opensui/wallet-kit";
import * as tweetnacl from "tweetnacl";

function App() {
  const wallet = useWalletKit();

  useEffect(() => {
    if (!wallet.connected) return;
    
    const offEvent = wallet.on("chainChange", ({ chain }) => {
      console.log("chainChange triggered", chain);
    });
    
    return () =>  offEvent();
  }, [wallet.connected]);
}
```

### Sign

[Message signing](https://en.bitcoin.it/wiki/Message_signing#:~:text=Message%20signing%20is%20the%20action,they%20correspond%20to%20each%20other.) is an important action to **verify whether an approval is confirmed by the owner of an account**. 

Here is an example for signing a simple message "OpenSui Kit".

> Notice that all the params are Uint8Array (i.e. bytes) type. 
> Use [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) to encode and decode when in a web app.

```
import {useWalletKit} from '@opensui/wallet-kit'
import * as tweetnacl from 'tweetnacl'

function App() {
  const wallet = useWalletKit();

  async function handleSignMsgEvent() {
    try {
      const message = 'OpenSui Kit!'
      const result = await wallet.signMessage({
        message: new TextEncoder().encode(message)
      })
      if (!result) return
      
      console.log('signed successfully', result)

			const isSigTrue = tweetnacl.sign.detached.verify(
        result.signedMessage,
        result.signature,
        wallet.account?.publicKey as Uint8Array,
      )
      
      console.log('verify signature via tweetnacl', isSigTrue)
    } catch (e) {
      console.error('signed failed', e)
    }
  }

  return (
  	<>
    	<button onClick={handleSignMsgEvent}>Sign Message</button>
    </>
  )
}
```

### Chain

If you want to get current connected chain of wallet, you can use `wallet.chain`. When the user switches chain inside the wallet, the value would get updated in real time.
I f a wallet doesn't support  [Sui wallet-standard](https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter/packages/wallet-standard) "change" event, the `wallet.chain` value would not change.

```
import { useWalletKit } from "@opensui/wallet-kit";
import * as tweetnacl from "tweetnacl";

function App() {
  const wallet = useWalletKit();

  useEffect(() => {
    if (!wallet.connected) return;
    
    // "sui:devnet" or "sui:testnet"
    console.log("current connected chain (network)", wallet.chain?.name); 
  }, [wallet.connected]);
}
```

## API

#### name

The name of connected wallet.

| Type                | Default   |
| ------------------- | --------- |
| string \| undefined | undefined |

#### connection status

The connection status of wallet.

| Properties | Type                                          | Default        |
| ---------- | --------------------------------------------- | -------------- |
| connecting | boolean                                       | false          |
| connected  | boolean                                       | false          |
| status     | 'disconnected' \| 'connecting' \| 'connected' | 'disconnected' |

```
const { status, connected, connecting } = useWalletKit();
console.log(status, connecting, connecting)
```

#### account

Account info in the connected wallet, including address, publicKey etc.

| Type                                       | Default   |
| ------------------------------------------ | --------- |
| [WalletAccount](/customize/types#WalletAccount) | undefined |

```
const { connected, account } = useWalletKit();

function getAccountInfo() {
  if (!connected) return;
  
  console.log(account?.address);
  console.log(account?.publicKey);
}
```

#### address

Alias for `account.address`

#### select

| Type                         | Default |
| ---------------------------- | ------- |
| (WalletName: string) => void |         |

#### getAccounts

Get all the accessible accounts returned by wallet.

| Type                    | Default |
| ----------------------- | ------- |
| () => Promise<string[]> |         |

The getAccounts will get the current wallet's account address. Now one wallet only have one account.

```
import { useWalletKit } from "@opensui/wallet-kit";

function YourComponent() {
  const wallet = useWalletKit();

  function handleGetAccounts() {
    if (!wallet.connected) return;
    
    getAccounts().then((accounts) => {
      console.log(accounts);
    });
  }
}
```

#### chains

Configuration of supported chains from WalletKitProvider

| Type                          | Default                             |
| ----------------------------- | ----------------------------------- |
| [Chain](/customize/types/#Chain)[] | [DefaultChains](/customize/types/#Chain) |

#### chain

Current connected chain of wallet.

#### adapter

The adapter normalized from the raw adapter of the connected wallet. You can call all the properties and functions on it, which is followed the [@mysten/wallet-standard](https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter/packages/wallet-standard)

| Type                                         | Default   |           |
| -------------------------------------------- | --------- | --------- |
| [IWalletAdapter](/customize/types#IWalletAdapter) |  |  |

#### signAndExecuteTransaction

The universal function to send and execute transaction via connected wallet. 

For all the types of transaction, see [Sui official docs ](https://github.com/MystenLabs/sui/blob/e45b188a80a067700efdc5a099745f18e1f41aac/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts#L98).

| Type                                                                                              | Default |
| ------------------------------------------------------------------------------------------------- | ------- |
| `(transaction: SuiSignAndExecuteTransactionInput) => Promise<SuiSignAndExecuteTransactionOutput>` |         |

#### signMessage

The function for message signing.

> Note that this is an experimental feature, not all the wallet has implemented.

| Type                                                                                             | Default |
| ------------------------------------------------------------------------------------------------ | ------- |
| `(input: {message: Uint8Array}) => Promise<{ signature: Uint8Array; signedMessage: Uint8Array}>` |         |

#### on

The function for wallet event listening. Returns the off function to remove listener.

| Type                                                                                    | Default |
| --------------------------------------------------------------------------------------- | ------- |
| `<E extends WalletEvent>(event: E, listener: WalletEventListeners[E], ) => () => void;` |         |

All the wallet events:

| Event         | Listener                                                                               | Description                                               |
| ------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| chainChange   | `(params: { chain: string }) => void;`                                                 | Emit when wallet app changes its chain                  |
| accountChange | `(params: { account: WalletAccount; }) => void;`                                       | Emit when wallet app changes its account                  |
| featureChange | `(params: { features: string[]; }) => void;`                                           | Emit when wallet app changes its wallet-standard features |
| change        | `(params: { chain?: string, account?: WalletAccount; features?: string[]; }) => void;` | Raw change event defined by wallet-standard               |
