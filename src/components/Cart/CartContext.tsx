'use client'
import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer } from "react";
import { CartAction, CartType, cartInitialState } from "./Cart.utils";
import { cartReducer } from "./CartReducer";

interface CardProviderProps {
  children: ReactNode
}

export type CartContextValue = {
  cartState: CartType
  dispatchCartState: Dispatch<CartAction>
}

export const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider = ({ children }: CardProviderProps) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, cartInitialState)
  console.log('cartState', cartState)

  const memoizedValue = useMemo(() => {return { cartState, dispatchCartState }}, [cartState])
  console.log('memoizedValue', memoizedValue)
  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) {
      throw new Error("Component beyond MovieContext!")
  }
  return cartCtx;
}