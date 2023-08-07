'use client'
import { AppContainer } from './page.style'
import { CartProvider } from '@/components/Cart/CartContext'
import MainApp from './ui/main/page'

export default function Home() {
  return (
    <AppContainer>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </AppContainer>
  )
}
