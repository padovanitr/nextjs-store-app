'use client'
import Header from '@/components/Header/page'
import Navbar from '@/components/Navbar/page'
import { useState } from 'react'
import { AppContainer, ShelfsWrapper } from './page.style'
import Cart from '@/components/Cart/page'
import Shelf from '@/components/Shelf/page'
import products from '../../products.json'
import { CartProvider } from '@/components/Cart/CartContext'

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <AppContainer>
      <CartProvider>
        <Header openNavbar={() => setNavbarOpen(true)} openCart={() => setCartOpen(true)} />
        <Navbar open={navbarOpen} onClose={() => setNavbarOpen(false)} />
        <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
        <ShelfsWrapper>
          <Shelf products={products} category="women's clothing" categoryLabel="Women" />
          <Shelf products={products} category="men's clothing" categoryLabel="Men" />
          <Shelf products={products} category="electronics" categoryLabel="Electronics" />
          <Shelf products={products} category="jewelery" categoryLabel="Jewelery" />
        </ShelfsWrapper>
      </CartProvider>
    </AppContainer>
  )
}
