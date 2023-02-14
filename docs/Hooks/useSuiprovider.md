---
order: 3
---

# useSuiProvider

This hook is used to provide the Sui `JsonRpcProvider` interface in React Hooks style.

> Note that [`@mysten/sui.js` package on npm](https://www.npmjs.com/package/@mysten/sui.js) or [Sui JSON-RPC](https://docs.sui.io/sui-jsonrpc) has more information.

This hook is internally just importing the `JsonRpcProvider` interface and implementation from [`@mysten/sui.js`](https://www.npmjs.com/package/@mysten/sui.js) . 

```
import { useSuiProvider } from "@opensui/wallet-kit";
function YourComponent() {
  const {
    getObjectsOwnedByAddress,
    getEventsByTransaction,
    getEventsBySender,

    // ...
  } = useSuiProvider();

  return;
}
```

You can use `JsonRpcProvider` interface provided by [`@mysten/sui.js` package on npm](https://www.npmjs.com/package/@mysten/sui.js) is a thin wrapper around the [Sui JSON-RPC](https://docs.sui.io/sui-jsonrpc) API to interact with the Sui blockchain. 

> It provides many useful methods and typings to give you better developer experience.

If you use the `JsonRpcProvider` provided by `useSuiProvider`, you can call the `sui_executeTransaction` RPC in a more convenient way:

```
function YourComponent() {
  const { executeTransaction } = useSuiProvider();

  return (
    <div
      onClick={async () => {
        // ... 
        const resp = await executeTransaction(txnBytes, signatureScheme, signature, pubkey);
        // ...
      }}
    >...</div>
  );
}
```
