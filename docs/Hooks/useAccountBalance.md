---
order: 1
---

# useAccountBalance

## Introduction

You can use this hooks to directly get the balance, loading status and error information of the current account under the current network

:::tips
If error is not null, it means fetch balance failed. In this case, the balance will set to be 0.
:::

## API

| Properties | Description                                           | Type          | Default |
| ---------- | ----------------------------------------------------- | ------------- | ------- |
| error      | error or null                                         | Error \| null | null    |
| loading    | fetch status                                          | boolean       | false   |
| balance    | the balance of current account, converted from BigInt | string        | '0'     |

### error

The `error` object tell you why the request is failed. If error is not null, it means network error or other problems of you app.

### loading

The `loading` can be used to add loading when fetching account balance.

```
import { useAccountBalance } from '@opensui/wallet-kit';

function App() {
  const { error, loading, balance } = useAccountBalance();

  return (
    <>
      <div>{loading && <Spin />}</div>
      <div>{balance}</div>
    </>
  );
}
```

### balance

The balance's type is string. If you want to use balance to calculate, you should convert it to bigint or number.

In some case, the balance can be bigger than Number.MAX_SAFE_INTEGER(2^53 - 1). If your project support Bigint(https://caniuse.com/?search=Bigint), you can derectly use `BigInt` method to convert, otherwise, use some lib to calculation bigint.

## Example

```
import { useEffect } from 'react';

interface AccountBalanceResponse {
  error: Error | null;
  loading: boolean;
  balance: string;
}

import { useAccountBalance } from '@opensui/wallet-kit';

function App() {
  const { error, loading, balance } = useAccountBalance();

  useEffect(() => {
    // if you want to do comparison or calculation with balance,
    // use Number or BigInt to convert the balance string
    if (Number(balance) > 1000000) {
      console.log('You are a millionare!');
    }
  }, [balance]);

  return (
    <div>
      <div>fetch balance loading status: {loading}</div>
      <div>account balance: {balance}</div>
    </div>
  );
}
```