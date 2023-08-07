'use client'
import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer } from "react";
import { CartAction, CartLocalStorageKey, CartType, cartInitialState } from "./Cart.utils";
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
  const localstorageCart = localStorage.getItem(CartLocalStorageKey)
  const savedCart = localstorageCart ? JSON.parse(localstorageCart) : null
  const [cartState, dispatchCartState] = useReducer(cartReducer, savedCart || cartInitialState)

  localStorage.setItem(CartLocalStorageKey, JSON.stringify(cartState))

  const memoizedValue = useMemo(() => {return { cartState, dispatchCartState }}, [cartState])

  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) {
      throw new Error("Component beyond context!")
  }
  return cartCtx;
}