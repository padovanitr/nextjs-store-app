export type CartItemType = {
  id: string
  quantity: number
}

export type CartType = CartItemType[]

export const cartInitialState = [] as CartType

export type CartAction =
  | {
      type: 'increase'
      payload: {
        productId: string
      }
    }
  | {
      type: 'decrease'
      payload: {
        productId: string
      }
    }
  | {
      type: 'remove'
      payload: {
        productId: string
      }
    }