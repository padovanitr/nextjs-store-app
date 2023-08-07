'use client'
import { ActionTypes, CartAction, cartInitialState } from "./Cart.utils";

export const cartReducer = (
  cart: typeof cartInitialState,
  action: CartAction
): typeof cartInitialState => {
  const { productId } = action.payload

  switch (action.type) {
    case ActionTypes.ADD_ACTION:
      const { name, price, image } = action.payload
      const cartCopyToAdd = [...cart]
      const hasItem = cartCopyToAdd.find((item) => item.id === productId);

      if (!hasItem) {
        return [...cartCopyToAdd, { id: productId, quantity: 1, name, price, image  }];
      }

      const updatedCartAdded = cart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item
      });

      return updatedCartAdded

    case ActionTypes.DECREASE_ACTION:
      const cartCopyToDecrease = [...cart]
      const itemToDecrease = cartCopyToDecrease.find((item) => item.id === productId);

      if (itemToDecrease && itemToDecrease.quantity === 1) {
        return cartCopyToDecrease.filter((item) => item.id !== itemToDecrease.id);
      }

      const updatedCart = cart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item
      });

      return updatedCart

    case ActionTypes.REMOVE_ACTION:
      const cartCopyToRemove = [...cart]
      return cartCopyToRemove.filter((item) => item.id !== productId);

    default:
      return cartInitialState
  }
};
