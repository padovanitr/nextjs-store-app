import { storeColors } from '@/utils/colors'
import Image from 'next/image'
import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;
`

export const HeadSection = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;
`

export const ImageDescription = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;
`

export const StyledButton = styled.button`
  border: 0;
  background: ${storeColors.mediumGray};
  border-radius: 8px;
`