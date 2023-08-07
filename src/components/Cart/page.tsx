import Image from 'next/image'
import { Backdrop, CartContainer, Title, HeaderContent, IconButton } from "./cart.style";
import CloseIcon from '../../assets/icons/CloseIcon.svg'

interface CartProps {
  open: boolean
  onClose: () => void
}

export default function Cart({ open, onClose }: CartProps) {
  return (
    <>
      <Backdrop $open={open} onClick={onClose} />
      <CartContainer $open={open}>
        <HeaderContent>
          <Title>My cart</Title>
          <IconButton onClick={onClose}>
            <Image
              height={15}
              width={15}
              src={CloseIcon}
              alt="Follow us on Twitter"
            />
          </IconButton>
        </HeaderContent>
        <div onClick={onClose}>test</div>
      </CartContainer>
    </>
  )
}
