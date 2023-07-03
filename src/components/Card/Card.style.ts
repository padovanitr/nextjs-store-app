import { storeColors } from '@/utils/colors'
import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,.16);
  border-radius: 8px;
  max-width: 192px;
  height: 355px;
  margin: 0;
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

  &:hover {
    background-color: ${storeColors.darkGrey};
    color: ${storeColors.white};
  }
`