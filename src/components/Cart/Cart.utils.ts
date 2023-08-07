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

export const CartLocalStorageKey = 'storeCart'