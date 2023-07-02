'use client'
import React from 'react'
import {
  CartImage,
  HeaderContainer,
  IconButton,
  LoginIconButton,
  MenuButton,
  ProfileImage,
  ProfileLabel,
  RightButtonsContainer,
  Title,
  TitleContainer,
} from './header.style'
import Image from 'next/image'
import HamburguerIcon from '../../assets/icons/HamburguerIcon.svg'
import CartIcon from '../../assets/icons/CartIcon.svg'
import ProfileIcon from '../../assets/icons/ProfileIcon.svg'
import Searchbar from '../Searchbar/page'

interface HeaderProps {
  openNavbar: () => void
}

export default function Header({ openNavbar }: HeaderProps) {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>StoreApp</Title>
        <MenuButton onClick={openNavbar}>
          <Image
            priority
            height={40}
            width={40}
            src={HamburguerIcon}
            alt="Follow us on Twitter"
          />
        </MenuButton>
      </TitleContainer>
      <Searchbar />
      <RightButtonsContainer>
        <LoginIconButton>
          <ProfileImage
            priority
            height={45}
            width={43}
            src={ProfileIcon}
            alt="Follow us on Twitter"
          />
          <ProfileLabel>Signup/Login</ProfileLabel>
        </LoginIconButton>
        <IconButton>
          <CartImage
            priority
            height={35}
            width={35}
            src={CartIcon}
            alt="Follow us on Twitter"
          />
        </IconButton>
      </RightButtonsContainer>
    </HeaderContainer>
  )
}
