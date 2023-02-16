---
order: 3
---

# useEndpointProvider

This hook is used to provide the Sui `JsonRpcProvider` interface in React Hooks style.
You can use `JsonRpcProvider` interface provided by [`@mysten/sui.js` package on npm](https://www.npmjs.com/package/@mysten/sui.js) is a thin wrapper around the [Sui JSON-RPC](https://docs.sui.io/sui-jsonrpc) API to interact with the Sui blockchain.
It provides many useful methods and typings to give you better developer experience.

> See more information from [`@mysten/sui.js` package on npm](https://www.npmjs.com/package/@mysten/sui.js) or [Sui JSON-RPC](https://docs.sui.io/sui-jsonrpc) .

```
import { useEndpointProvider } from "@opensui/wallet-kit";
function YourComponent() {
  const {
    getObjectsOwnedByAddress,
    getEventsByTransaction,
    getEventsBySender,

    // ...
  } = useEndpointProvider();

  return;
}
```

If you use the `JsonRpcProvider` provided by `useEndpointProvider`, you can call the `sui_executeTransaction` RPC in a more convenient way:

```
function YourComponent() {
  const { executeTransaction } = useEndpointProvider();

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
