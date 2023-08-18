import Image from 'next/image'
import {
  Backdrop,
  CartContainer,
  Title,
  HeaderContent,
  IconButton,
  EmptyCartContainer,
  StyledText,
  EmptyContentWrapper,
  CartContentContainer,
  CheckoutButtonContainer,
  CheckoutButton,
  ItemsWrapper,
  ClearCartContainer,
  StyledClearCartButton,
} from "./cart.style";
import CloseIcon from '../../assets/icons/CloseIcon.svg'
import CartIcon from '../../assets/icons/CartIcon.svg'
import { useCart } from './CartContext';
import CartItem from './CartItem/page';

interface CartProps {
  open: boolean
  onClose: () => void
}

export default function Cart({ open, onClose }: CartProps) {
  const { cartState } = useCart()

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
        {cartState.length === 0 ? (
          <EmptyCartContainer>
            <EmptyContentWrapper>
              <Image alt="cart icon" height={80} width={80} src={CartIcon} />
              <StyledText>Your cart is empty</StyledText>
            </EmptyContentWrapper>
          </EmptyCartContainer>
        ) : (
          <CartContentContainer>
            <div>
              <ClearCartContainer>
                <StyledClearCartButton>limpar carrinho</StyledClearCartButton>
              </ClearCartContainer>
              <ItemsWrapper>
                {cartState.map(({ id, name, image, price, quantity }) => (
                  <CartItem
                    key={id}
                    name={name}
                    imageSrc={image}
                    price={price}
                    quantity={quantity}
                  />
                ))}
              </ItemsWrapper>
            </div>
            <CheckoutButtonContainer>
              <CheckoutButton>Checkout</CheckoutButton>
            </CheckoutButtonContainer>
          </CartContentContainer>
        )}
      </CartContainer>
    </>
  );
}
