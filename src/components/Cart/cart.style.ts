import { storeColors } from "@/utils/colors";
import { styled } from "styled-components";

export const CartContainer = styled.div<{ $open?: boolean }>`
  width: 400px;
  background-color: white;
  height: 100%;
  width: 280px;
  max-width: 280px;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: ${storeColors.white};
  overflow-x: hidden;
  padding: 60px 20px 0;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 8px rgba(46, 49, 146, 0.15);
  transform: translateX(${({ $open }) => ($open ? '0px' : '320px')});
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