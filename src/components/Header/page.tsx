'use client'
import React from 'react'
import { HeaderContainer, MenuButton } from './header.style'
import Image from 'next/image'
import HamburguerIcon from '../../assets/icons/HamburguerIcon.svg'
import Searchbar from '../Searchbar/page'

interface HeaderProps {
  openNavbar: () => void
}

export default function Header({ openNavbar }: HeaderProps) {
  return (
    <HeaderContainer>
      <MenuButton onClick={openNavbar}>
        <Image
          priority
          height={23}
          width={30}
          src={HamburguerIcon}
          alt="Follow us on Twitter"
        />
      </MenuButton>
      <Searchbar />
    </HeaderContainer>
  )
}
