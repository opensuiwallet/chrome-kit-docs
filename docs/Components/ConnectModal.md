---
order: 3
---

# ConnectWalletModal

`ConnectWalletModal` is a nicely designed wallet-select modal for wallet selection. Usually you won't need to import it because we hide it inside our `ConnectWalletButton`. However, if  you want to customize your own ConnectWalletButton, please use our connect modal.

## Usage

```
import { useWalletKit, ConnectWalletModal } from '@opensui/wallet-kit';

function App() {
  const {connected} = useWalletKit()
  const [showModal, setShowModal] = useState(false)

  if (connected) {
    return <... />
  }
  return (
    <ConnectWalletModal
      open={showModal}
      onOpenChange={(open) => setShowModal(open)}
    >
      <... />
    </ConnectWalletModal>
  )
}

```

## Props

| Properties   | Description                     | Type                    | Default |
| ------------ | ------------------------------- | ----------------------- | ------- |
| children     | Element for the modal   | ReactNode               | null    |
| open         | Opening the modal | boolean                 | false   |
| onOpenChange | Change event         | (open: boolean) => void | --      |
