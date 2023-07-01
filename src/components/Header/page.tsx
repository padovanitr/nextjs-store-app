'use client'
import React from 'react'
import { HeaderContainer } from './header.style'

interface HeaderProps {
  openNavbar: () => void
}

export default function Header({ openNavbar }: HeaderProps) {
  return (
    <HeaderContainer>
      <div onClick={openNavbar}>open</div>
    </HeaderContainer>
  )
}
