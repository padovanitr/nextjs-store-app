'use client'
import Image from 'next/image'
import {
  ButtonContainer,
  CardContainer,
  HeadSection,
  ImageDescription,
  Price,
  ProductName,
  QuantityButton,
  QuantityButtonsContainer,
  QuantityLabel,
  StyledButton,
} from './Card.style'
import formatCurrency from '@/utils/formatCurrency'
import { useCart } from '../Cart/CartContext'
import { ActionTypes } from '../Cart/Cart.utils'
import { CardTexts } from './Card.utils'

export interface CardProps {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

export default function Card ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: CardProps) {
  const { cartState, dispatchCartState } = useCart()
  const currentProduct = cartState.find((product) => product.id === String(id))

  const addProduct = () => {
    dispatchCartState({
      type: ActionTypes.ADD_ACTION,
      payload: {
        productId: String(id),
        name: title,
        price,
        image,
      }
    })
  }

  const decreaseProduct = () => {
    dispatchCartState({
      type: ActionTypes.DECREASE_ACTION,
      payload: {
        productId: String(id),
      }
    })
  }

  return (
    <CardContainer>
      <HeadSection></HeadSection>
      <ImageDescription>
        <Image width={150} height={150} src={image} alt={title} />
        <ProductName>{title}</ProductName>
        <Price>{formatCurrency(price)}</Price>
      </ImageDescription>
      <ButtonContainer>
        {currentProduct && currentProduct.quantity >= 1 ? (
          <QuantityButtonsContainer>
            <QuantityButton onClick={decreaseProduct}>-</QuantityButton>
            <QuantityLabel>{currentProduct.quantity}</QuantityLabel>
            <QuantityButton onClick={addProduct}>+</QuantityButton>
          </QuantityButtonsContainer>
        ) : (
          <StyledButton onClick={addProduct}>{CardTexts.BuyButtonLabel}</StyledButton>
        )}
      </ButtonContainer>
    </CardContainer>
  )
}
