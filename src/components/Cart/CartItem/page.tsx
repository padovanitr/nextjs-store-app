import Image from "next/image";
import {
  ImageContainer,
  InfoActionContainer,
  ItemContainer,
  NameCloseWrapper,
  PriceActionWrapper,
  ButtonsWrapper,
  CloseButton,
  ActionButton,
} from "./cartItem.style";
import ExampleImg from '../../../assets/icons/ProfileIcon.svg'
import CloseIconBlack from '../../../assets/icons/CloseIconBlack.svg'
import PlusIcon from '../../../assets/icons/PlusIcon.svg'
import MinusIcon from '../../../assets/icons/MinusIcon.svg'

interface CartItemProps {
  imageSrc?: string
}

export default function CartItem({ imageSrc }: CartItemProps) {
  return (
    <ItemContainer>
      <ImageContainer>
        <Image 
          src={ExampleImg}
          width={80}
          height={80}
          alt="prod image"
        />
      </ImageContainer>
      <InfoActionContainer>
        <NameCloseWrapper>
          <p>name product</p>
          <CloseButton>
            <Image
              height={13}
              width={13}
              src={CloseIconBlack}
              alt="Follow us on Twitter"
            />
          </CloseButton>
        </NameCloseWrapper>
        <PriceActionWrapper>
          <p>$10</p>
          <ButtonsWrapper>
            <ActionButton>
              <Image
                height={35}
                width={35}
                src={MinusIcon}
                alt="Follow us on Twitter"
              />
            </ActionButton>
            <p>1</p>
            <ActionButton>
              <Image
                height={35}
                width={35}
                src={PlusIcon}
                alt="Follow us on Twitter"
              />
            </ActionButton>
          </ButtonsWrapper>
        </PriceActionWrapper>
      </InfoActionContainer>
    </ItemContainer>
  )
}
