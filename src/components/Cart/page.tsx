import { Backdrop, CartContainer } from "./cart.style";

interface CartProps {
  open: boolean
  onClose: () => void
}

export default function Cart({ open, onClose }: CartProps) {
  return (
    <>
      <Backdrop $open={open} onClick={onClose} />
      <CartContainer $open={open}>
        <div onClick={onClose}>test</div>
      </CartContainer>
    </>
  )
}
