import { ButtonContainer, CardContainer, HeadSection, ImageDescription, StyledButton } from "./Card.style";

export default function Card() {
  return (
    <CardContainer>
      <HeadSection>
        text
      </HeadSection>
      <ImageDescription>
        image e text
      </ImageDescription>
      <ButtonContainer>
        <StyledButton>Buy</StyledButton>
      </ButtonContainer>
    </CardContainer>
  )
}
