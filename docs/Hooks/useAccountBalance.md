---
order: 2
---

# useAccountBalance

## Usage

The balance's type is string. If you want to use balance to calculate, you should convert it to bigint or number.

```
import { useEffect } from 'react';
import { useAccountBalance } from '@opensui/wallet-kit';

interface AccountBalanceResponse {
  error: Error | null;
  loading: boolean;
  balance: string;
}

function App() {
  const { error, loading, balance } = useAccountBalance();

  useEffect(() => {
    if (Number(balance) > 1000000) {
      console.log('You have a million');
    }
  }, [balance]);

  return (
    <div>
      <div>fetch balance loading status: {loading}</div>
      <div>fetch account balance: {balance}</div>
    </div>
  );
}
```

## API

You can use `useAccountBalance` hooks to directly get the balance, loading status and error information of the current account under the current network.

> If error is not null, it means fetch balance failed. In this case, the balance will set to be 0.


| Properties | Description                                           | Type          | Default |
| ---------- | ----------------------------------------------------- | ------------- | ------- |
| error      | error or null                                         | Error \| null | null    |
| loading    | fetch status                                          | boolean       | false   |
| balance    | the balance of current account, converted from BigInt | string        | '0'     |

#### error

The `error` object tell you why the request is failed. If error is not null, it means network error or other problems of you app.

#### loading

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
