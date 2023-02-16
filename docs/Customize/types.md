---
order: 5
---

# Types of Sui SDK

Our Kit directly transparently transmits the type of sui official SDK, so that you can extend the type in typescript

See [Sui SDK types](https://github.com/MystenLabs/sui/tree/main/sdk/typescript/src/types).

## Chain

```ts
export type Chain = {
  id: string;
  name: string;
  rpcUrl: string;
};
```

Predefined chains are `Devnet` and `Testnet`:

```ts
export const SuiDevnetChain: Chain = {
  id: "sui:devnet",
  name: "Sui Devnet",
  rpcUrl: "https://fullnode.devnet.sui.io/",
};
export const SuiTestnetChain: Chain = {
  id: "sui:testnet",
  name: "Sui Testnet",
  rpcUrl: "https://fullnode.testnet.sui.io/",
};

export const DefaultChains = [SuiDevnetChain, SuiTestnetChain];
```

## MyDefaultWallet

```typescript
export interface MyDefaultWallet {
  name: string; 
  iconUrl: string;
  downloadUrl: {
    browserExtension?: string;
  };
}
```

For example, you can use it when customizing defaultWallet item:

```typescript
import MyDefaultWallet from "@opensui/wallet-kit";

const myWallet: MyDefaultWallet = {
  name: "myWallet",
  iconUrl: "external url or data url",
  downloadUrl: {
    browserExtension: "chrome extension store url...",
  },
};
```

## WalletAccount

```ts
export interface WalletAccount {
  readonly address: string;
  readonly publicKey: Uint8Array;
  readonly chains: IdentifierArray;
  readonly features: IdentifierArray;
  readonly label?: string;
  readonly icon?: WalletIcon;
}
```

## MyDefaultWallet

We also provide [Wallet Adapter interface](https://github.com/opensuiwallet/wallet-kit/blob/main/packages/kit/src/types/wallet.ts).
