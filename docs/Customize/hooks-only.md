---
order: 3
---

# Hooks Only

Let's learn how to use the provided hooks only. It's useful for you to customize our UI components together with our hooks.

> Don't forget to wrap our app using `WalletKitProvider`. The WalletKitProvider component provides the context of data and functions.

You should give two block in page for displaying :

* A connect button for wallet connection
* Account info after connection

```
import { useWalletKit } from "@opensui/wallet-kit";
import { useState, useEffect } from "react";

function App() {
  const wallet = useWalletKit();

  return (
    <div>
      {wallet.connected ? (
        <AccountInfo address={wallet?.address} />
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
```

Using `select` method from `useWalletKit` hook to connect the one of the SUI wallets for your wallet-select modal component.

```
import { useWalletKit } from "@opensui/wallet-kit";

function WalletSelector() {
  const {
    select,
    
    // default wallets
    configuredWallets, 
    
    // Sui-standard wallets detected from browser
    detectedWallets, 
    
     // all the installed Sui-standard wallets
    allAvailableWallets,
  } = useWalletKit();

  return [...configuredWallets, ...detectedWallets].map((wallet) => (
    <button
      key={wallet.name}
      onClick={() => {
        // if user has not install the wallet, provide a guiding  to install
        if (!wallet.installed) {
          //...
          return;
        }
        select(wallet.name);
      }}
    >
      Connect to {wallet.name}
    </button>
  ));
}
```
