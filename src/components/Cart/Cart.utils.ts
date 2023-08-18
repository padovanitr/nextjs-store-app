export type CartItemType = {
  id: string
  quantity: number
  name: string
  price: number
  image: string
}

export type CartType = CartItemType[]

export const cartInitialState = [] as CartType

export enum ActionTypes {
  ADD_ACTION = 'ADD',
  DECREASE_ACTION = 'DECREASE',
  REMOVE_ACTION = 'REMOVE',
  CLEAR_CART_ACTION = 'CLEAR_CART',
}

export type CartAction =
  | {
      type: ActionTypes.ADD_ACTION
      payload: {
        productId: string
        name: string
        price: number
        image: string
      }
    }
  | {
      type: ActionTypes.DECREASE_ACTION
      payload: {
        productId: string
      }
    }
  | {
      type: ActionTypes.REMOVE_ACTION
      payload: {
        productId: string
      }
    }
  | {
      type: ActionTypes.CLEAR_CART_ACTION
    }

export const CartLocalStorageKey = 'storeCart'