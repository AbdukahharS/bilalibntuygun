import React from 'react'
import { AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  LogoImg,
  LogoText,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <a
        href='/'
        style={{ display: 'flex', alignItems: 'center', color: 'white' }}
      >
        <LogoImg src={require('../../Images/logo.png')} alt='Logo' />
        <LogoText>Biloliddin Abduvahobov</LogoText>
      </a>
    </Div1>
    <Div2>
      <li>
        <NavLink href='#education'>Education</NavLink>
      </li>
      <li>
        <NavLink href='#experience'>Experience</NavLink>
      </li>
      <li>
        <NavLink href='#languages'>Languages</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href='https://call.whatsapp.com/video/MTVT5L8pQqrIQswroCSURl'
        target='_blank'
      >
        <AiOutlineWhatsApp size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://www.linkedin.com/in/biloliddin-abduvahobov-979519218/'
        target='_blank'
      >
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://www.instagram.com/biloliddin_abduvakhabov/'
        target='_blank'
      >
        <FaInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
