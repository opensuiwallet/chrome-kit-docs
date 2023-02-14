---
order: 3
---

# ConnectModal

`ConnectModal` is a nicely designed wallet-select modal for wallet selection. Usually you won't need to import it because we hide it inside our `ConnectButton`. However, if  you want to customize your own ConnectButton, please use our connect modal.

## Usage

```
import { useWallet, ConnectModal } from '@opensui/wallet-kit';

function App() {
  const {connected} = useWallet()
  const [showModal, setShowModal] = useState(false)

  if (connected) {
    return <... />
  }
  return (
    <ConnectModal
      open={showModal}
      onOpenChange={(open) => setShowModal(open)}
    >
      <... />
    </ConnectModal>
  )
}

```

## Props

| Properties   | Description                     | Type                    | Default |
| ------------ | ------------------------------- | ----------------------- | ------- |
| children     | trigger element for the modal   | ReactNode               | null    |
| open         | Indicator for opening the modal | boolean                 | false   |
| onOpenChange | visibility change event         | (open: boolean) => void | --      |
