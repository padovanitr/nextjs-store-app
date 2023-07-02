'use client'
import Header from '@/components/Header/page'
import Navbar from '@/components/Navbar/page'
import { useState } from 'react'
import { AppContainer } from './page.style'
import Card from '@/components/Card/page'

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <AppContainer>
      <Header openNavbar={() => setNavbarOpen(true)} />
      <Navbar open={navbarOpen} onClose={() => setNavbarOpen(false)} />
      <Card />
    </AppContainer>
  )
}
