import { storeColors } from '@/utils/colors'
import Image from 'next/image'
import { styled } from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

export const HeaderContainer = styled.header`
  background-color: white;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  overflow-x: hidden;
  padding: 25px 40px;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 8px rgba(46, 49, 146, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: 70px;
`

export const MenuButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: fit-content;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`

export const IconButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: fit-content;
  border: none;
  cursor: pointer;
`

export const RightButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const LoginIconButton = styled(IconButton)`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ProfileImage = styled(Image)`
  margin-top: 10px;
`

export const CartImage = styled(Image)`
  margin-top: 5px;
`

export const ProfileLabel = styled.p`
  font-size: 1rem;
  color: ${storeColors.darkGrey};
`

export const Title = styled.p`
  font-size: 2rem;
  color: ${storeColors.black};
  margin: 0;
  font-weight: 600;
`

export const StyledBadge = styled.span`
  position: absolute;
  background-color: ${storeColors.darkGrey};
  border-radius: 50%;
  color: ${storeColors.white};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1.2rem;
  right: 2.3rem;
  font-size: 0.75rem;
  font-weight: 400;
`
