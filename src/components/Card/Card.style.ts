import { storeColors } from '@/utils/colors'
import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,.16);
  border-radius: 8px;
  height: 365px;
  margin: 0;
  width: 230px;
`

export const HeadSection = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;
  flex: 1;
`

export const ImageDescription = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;
  flex: 4;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const StyledButton = styled.button`
  border: 0;
  background: ${storeColors.mediumGray};
  border-radius: 8px;
  border: 1px solid ${storeColors.darkGrey};
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  padding: 8px 25px;
  min-width: 120px;
  color: ${storeColors.darkGrey};
  transition: all 0.2s ease;
  width: 200px;
  height: 45px;

  &:hover {
    background-color: ${storeColors.darkGrey};
    color: ${storeColors.white};
  }
`

export const ProductName = styled.p`
  font-size: 1rem;
  color: ${storeColors.darkGrey};
  font-weight: 400;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  text-transform: lowercase;
  color: #111;
  padding: 5px 10px;
`

export const Price = styled.p`
  font-size: 1.125rem;
  color: ${storeColors.black};
  font-weight: 500;
  margin: 5px 0;
  text-align: center;
`

export const QuantityButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  border: 1px solid ${storeColors.darkGrey};
  border-radius: 8px;
  height: 45px;
`

export const QuantityButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1rem;
`

export const QuantityLabel = styled.p`
  font-size: 1rem;
  color: ${storeColors.darkGrey};
  width: 90px;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${storeColors.darkGrey};
  border-left: 1px solid ${storeColors.darkGrey};
  margin: 0;
  height: 100%;
  align-items: center;
`