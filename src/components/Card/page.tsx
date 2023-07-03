import Image from 'next/image'
import {
  ButtonContainer,
  CardContainer,
  HeadSection,
  ImageDescription,
  StyledButton,
} from './Card.style'

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

export default function Card({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: CardProps) {
  return (
    <CardContainer>
      <HeadSection>text</HeadSection>
      <ImageDescription>
        <Image src={image} alt={title} />
      </ImageDescription>
      <ButtonContainer>
        <StyledButton>Buy</StyledButton>
      </ButtonContainer>
    </CardContainer>
  )
}
