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
  TotalsContainer,
  TotalText,
  TotalLabel,
} from "./cart.style";
import CloseIcon from '../../assets/icons/CloseIcon.svg'
import CartIcon from '../../assets/icons/CartIcon.svg'
import { useCart } from './CartContext';
import CartItem from './CartItem/page';
import { ActionTypes } from './Cart.utils';
import { useMemo } from 'react';
import formatCurrency from '@/utils/formatCurrency';

interface CartProps {
  open: boolean
  onClose: () => void
}

export default function Cart({ open, onClose }: CartProps) {
  const { cartState, dispatchCartState } = useCart()

  const clearCart = () => {
    dispatchCartState({
      type: ActionTypes.CLEAR_CART_ACTION,
    })
  }

  const totalOrder = useMemo(() => {
    return cartState.reduce((acc, curr) => {
      const currTotal = curr.price * curr.quantity
  
      return acc + currTotal
    }, 0)
  }, [cartState])

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
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              <ClearCartContainer>
                <StyledClearCartButton onClick={clearCart}>limpar carrinho</StyledClearCartButton>
              </ClearCartContainer>
              <ItemsWrapper>
                {cartState.map(({ id, name, image, price, quantity }) => (
                  <CartItem
                    key={id}
                    name={name}
                    imageSrc={image}
                    price={price}
                    quantity={quantity}
                    productId={id}
                  />
                ))}
              </ItemsWrapper>
              <TotalsContainer>
                <TotalLabel>Total</TotalLabel>
                <TotalText>{formatCurrency(totalOrder)}</TotalText>
              </TotalsContainer>
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
