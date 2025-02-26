import React from 'react'
import { FooterContainer } from '../styles/styledComponents/FooterStyles'
import Logo from '../assets/images/logo.svg'
import facebookLogo from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import twitter from '../assets/images/icon-twitter.svg'
import PinInterest from '../assets/images/icon-pinterest.svg'


export const Footer:React.FC = () => {
  return (
    <>
      <FooterContainer>
        <img src={Logo} alt="logo for the footer" />

        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>

        <div className="socialIcons cursor-pointer">
          <img src={facebookLogo} alt="facebook_logo" />
          <img src={instagram} alt="instagram_logo" />
          <img src={twitter} alt="twitter_logo" />
          <img src={PinInterest} alt="pinterest_logo" />
        </div>
      </FooterContainer>
    </>
  )
}


