---
title: Types
sidebar_position: 7
---

## Types of Sui SDK

Our Kit directly transparently transmits the type of sui official SDK, so that you can extend the type in typescript

See [Sui SDK types](https://github.com/MystenLabs/sui/tree/main/sdk/typescript/src/types).

## IDefaultWallet

```typescript
export interface IDefaultWallet {
  name: string; // wallet name
  iconUrl: string; // wallet icon url (external url or data url)
  downloadUrl: {
    browserExtension?: string; // provide download link if this wallet is not installed
  };
}
```

example for customized defaultWallet item:

```typescript
import IDefaultWallet from "@opensui/wallet-kit";

const myWallet: IDefaultWallet = {
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
  /** Address of the account, corresponding with the public key. */
  readonly address: string;

  /** Public key of the account, corresponding with the secret key to sign, encrypt, or decrypt using. */
  readonly publicKey: Uint8Array;

  /** Chains supported by the account. */
  readonly chains: IdentifierArray;

  /** Features supported by the account. */
  readonly features: IdentifierArray;

  /** Optional user-friendly descriptive label or name for the account, to be displayed by apps. */
  readonly label?: string;

  /** Optional user-friendly icon for the account, to be displayed by apps. */
  readonly icon?: WalletIcon;
}
```

## IWalletAdapter

We also provide [Wallet Adapter interface](https://github.com/opensuiwallet/wallet-kit/blob/main/packages/kit/src/types/wallet.ts).

## Chain

Definition of chain's structure (aka Network for Sui Wallet)

```ts
export type Chain = {
  id: string;
  name: string;
  rpcUrl: string;
};
```

Default values:

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

export const UnknownChain: Chain = {
  id: "unknown:unknown",
  name: "Unknown Network",
  rpcUrl: "",
};

export const DefaultChains = [SuiDevnetChain, SuiTestnetChain];
```
