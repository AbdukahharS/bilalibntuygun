import React from 'react'
import { AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+601126740772'>(+60) 1126740772</LinkItem>
          <LinkItem href='tel:+998881500122'>(+998) 881500122</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:bilalibntuygun05@gmail.com'>
            bilalibntuygun05@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
