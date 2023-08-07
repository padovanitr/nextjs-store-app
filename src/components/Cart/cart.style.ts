import { storeColors } from "@/utils/colors";
import { styled } from "styled-components";

export const CartContainer = styled.div<{ $open?: boolean }>`
  background-color: white;
  height: 100%;
  max-width: 380px;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: ${storeColors.white};
  overflow-x: hidden;
  padding: 0;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 8px rgba(46, 49, 146, 0.15);
  transform: translateX(${({ $open }) => ($open ? '0px' : '380px')});
  display: flex;
  flex-direction: column;
  width: 99.9vw;
`

export const Backdrop = styled.div<{ $open?: boolean }>`
  position: fixed;
  width: 100vw;
  opacity: 0.4;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${storeColors.black};
  z-index: 1;
  transition: opacity 0.15s ease-in;
  display: ${({ $open }) => ($open ? 'block' : 'none')};
`

export const HeaderContent = styled.div`
  background-color: ${storeColors.darkGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  max-width: 350px;
  padding: 5px 15px;
`

export const Title = styled.h2`
  font-size: 1.25rem;
  background-color: ${storeColors.white};
  margin: 0;
  background-color: transparent;
  color: #fff;
`

export const IconButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: fit-content;
  border: none;
  cursor: pointer;
`