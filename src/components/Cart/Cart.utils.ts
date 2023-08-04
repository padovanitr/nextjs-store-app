export type CartItemType = {
  id: string
  quantity: number
  name: string
  price: number
  image: string
}

export type CartType = CartItemType[]

export const cartInitialState = [] as CartType

export type CartAction =
  | {
      type: 'add'
      payload: {
        productId: string
        name: string
        price: number
        image: string
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