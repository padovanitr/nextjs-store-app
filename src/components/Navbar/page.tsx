'use client'
import React from 'react'
import { Backdrop, NavbarContainer } from './navbar.style'

interface NavbarProps {
  open: boolean
  onClose: () => void
}

export default function Navbar({ open, onClose }: NavbarProps) {
  return (
    <>
      <Backdrop $open={open} onClick={onClose} />
      <NavbarContainer $open={open}>
        <div onClick={onClose}>test</div>
      </NavbarContainer>
    </>
  )
}
