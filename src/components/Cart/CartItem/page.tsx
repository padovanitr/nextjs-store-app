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
  StyledText,
  StyledNameText,
} from "./cartItem.style";
import CloseIcon from '../../../assets/icons/CloseIcon.svg'
import PlusIcon from '../../../assets/icons/PlusIcon.svg'
import MinusIcon from '../../../assets/icons/MinusIcon.svg'
import { useCart } from "../CartContext";
import { ActionTypes } from "../Cart.utils";

interface CartItemProps {
  imageSrc: string
  name: string
  price: number
  quantity: number
  productId: string
}

export default function CartItem({ imageSrc, name, price, quantity, productId }: CartItemProps) {
  const { dispatchCartState } = useCart()

  const addProduct = () => {
    dispatchCartState({
      type: ActionTypes.ADD_ACTION,
      payload: {
        productId: String(productId),
        name,
        price,
        image: imageSrc,
      }
    })
  }

  const decreaseProduct = () => {
    dispatchCartState({
      type: ActionTypes.DECREASE_ACTION,
      payload: {
        productId: String(productId),
      }
    })
  }

  const removeProduct = () => {
    dispatchCartState({
      type: ActionTypes.REMOVE_ACTION,
      payload: {
        productId: String(productId),
      }
    })
  }

  return (
    <ItemContainer>
      <ImageContainer>
        <Image 
          src={imageSrc}
          width={80}
          height={80}
          alt="prod image"
        />
      </ImageContainer>
      <InfoActionContainer>
        <NameCloseWrapper>
          <StyledNameText>{name}</StyledNameText>
          <CloseButton onClick={removeProduct}>
            <Image
              height={13}
              width={13}
              src={CloseIcon}
              alt="Follow us on Twitter"
            />
          </CloseButton>
        </NameCloseWrapper>
        <PriceActionWrapper>
          <StyledText>{price}</StyledText>
          <ButtonsWrapper>
            <ActionButton onClick={decreaseProduct}>
              <Image
                height={35}
                width={35}
                src={MinusIcon}
                alt="Follow us on Twitter"
              />
            </ActionButton>
            <StyledText>{quantity}</StyledText>
            <ActionButton onClick={addProduct}>
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
