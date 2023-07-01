'use client'
import Header from '@/components/Header/page'
import Navbar from '@/components/Navbar/page'
import { useState } from 'react'

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <div>
      <Header openNavbar={() => setNavbarOpen(true)} />
      <Navbar open={navbarOpen} onClose={() => setNavbarOpen(false)} />
    </div>
  )
}
