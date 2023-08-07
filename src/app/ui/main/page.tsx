'use client'
import { useState } from 'react'
import Header from '@/components/Header/page'
import Navbar from '@/components/Navbar/page'
import Cart from '@/components/Cart/page'
import Shelf from '@/components/Shelf/page'
import products from '../../../../products.json'
import { ContentWraper, MainContainer, ShelfsWrapper } from './main.style'

export default function MainApp() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <MainContainer>
      <Header openNavbar={() => setNavbarOpen(true)} openCart={() => setCartOpen(true)} />
      <Navbar open={navbarOpen} onClose={() => setNavbarOpen(false)} />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
      <ContentWraper>
        <ShelfsWrapper>
          <Shelf products={products} category="women's clothing" categoryLabel="Women" />
          <Shelf products={products} category="men's clothing" categoryLabel="Men" />
          <Shelf products={products} category="electronics" categoryLabel="Electronics" />
          <Shelf products={products} category="jewelery" categoryLabel="Jewelery" />
        </ShelfsWrapper>
      </ContentWraper>
    </MainContainer>
  )
}
