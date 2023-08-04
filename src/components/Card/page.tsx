'use client'
import Image from 'next/image'
import {
  ButtonContainer,
  CardContainer,
  HeadSection,
  ImageDescription,
  Price,
  ProductName,
  StyledButton,
} from './Card.style'
import formatCurrency from '@/utils/formatCurrency'
import { useCart } from '../Cart/CartContext'
import { memo } from 'react'

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

const Card = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: CardProps) => {
  const { dispatchCartState } = useCart()

  const addProduct = () => {
    dispatchCartState({
      type: 'add',
      payload: {
        productId: String(id),
        name: title,
        price,
        image,
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
        <StyledButton onClick={addProduct}>Buy</StyledButton>
      </ButtonContainer>
    </CardContainer>
  )
}

export default memo(Card)
