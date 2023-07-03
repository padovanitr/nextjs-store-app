'use client'
import Header from '@/components/Header/page'
import Navbar from '@/components/Navbar/page'
import { useState } from 'react'
import { AppContainer, ShelfsWrapper } from './page.style'
import Card from '@/components/Card/page'
import Cart from '@/components/Cart/page'

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <AppContainer>
      <Header openNavbar={() => setNavbarOpen(true)} openCart={() => setCartOpen(true)} />
      <Navbar open={navbarOpen} onClose={() => setNavbarOpen(false)} />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
      <ShelfsWrapper>
        <Card />
      </ShelfsWrapper>
    </AppContainer>
  )
}
