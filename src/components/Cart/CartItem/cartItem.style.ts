import { storeColors } from "@/utils/colors";
import { styled } from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 1rem 1rem;
`

export const ImageContainer = styled.div`
  width: auto;
  min-width: 100px;
  display: flex;
  align-items: center;
`

export const InfoActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`

export const NameCloseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const PriceActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CloseButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: fit-content;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`

export const ActionButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: fit-content;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`

export const StyledText = styled.p`
  color: ${storeColors.white};
  font-size: 0.875rem;
`

export const StyledNameText = styled.p`
  color: ${storeColors.white};
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  word-break: break-all;
  white-space: nowrap;
`
