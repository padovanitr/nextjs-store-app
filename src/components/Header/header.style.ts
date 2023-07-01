import { storeColors } from '@/utils/colors'
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: white;
  height: 60px;
  width: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${storeColors.white};
  overflow-x: hidden;
  padding: 10px 30px;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 8px rgba(46, 49, 146, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuButton = styled.button`
  background-color: transparent;
  height: fit-content;
  width: fit-content;
  border: none;
  cursor: pointer;
`
