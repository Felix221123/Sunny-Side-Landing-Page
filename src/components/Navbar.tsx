import React from 'react'
import {
  Header,
  NavbarContainer,
  MenuContainer,
  H1,}
  from '../styles/styledComponents/NavbarStyles'
import MenuHamburger from '../assets/images/icon-hamburger.svg'
import ArrowDown from '../assets/images/icon-arrow-down.svg'
import Logo from '../assets/images/logo.svg'
import CloseBtn from "../assets/images/closebtn.svg"
import { AnimatePresence } from "motion/react"



export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // handle hamburger click
  const handleHamburgerClick = () => {
    setIsOpen(true);
  };

  // handle close button click
  const handleCloseBtnClick = () => {
    setIsOpen(false);
  };



  // animation variants for menu visibility
  const getMenuAnimationVariants = () => ({
    hidden: { top: -250, opacity: 0 },
    visible: { top: '0rem', opacity: 1 },
    exit: { top: -250, opacity: 0 },
  })



  return (
    <>

      {/* navbar on desktop and mobile */}
      <NavbarContainer>
        {/* header and nav */}
        <Header>
          <img src={Logo} alt='logo' data-testid="logo" id='logo'/>

          {/* nav */}
          <nav>
            <ul>
              <li onClick={handleCloseBtnClick}>About</li>
              <li onClick={handleCloseBtnClick}>Services</li>
              <li onClick={handleCloseBtnClick}>Projects</li>
              <li onClick={handleCloseBtnClick} className='contactBtn uppercase font-bold'>Contact</li>
            </ul>
          </nav>

          {/* hamburger */}
          <img src={MenuHamburger} alt="menuHamburger" className='menuHamburger'onClick={handleHamburgerClick}/>
        </Header>

        {/* h1 and arrow */}
        <H1 className='uppercase font-black text-center'>we are creatives</H1>
        <div className="imgContainer">
          <img src={ArrowDown} alt="arrow down" className='arrowDown' />
        </div>
      </NavbarContainer>

      {/* menu container on mobile version */}
      <AnimatePresence>
        {isOpen && (
          <MenuContainer
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={getMenuAnimationVariants()}
            data-testid="menuContainer"
          >
            <img src={CloseBtn} alt="close_btn" className='closeBtn' onClick={handleCloseBtnClick}/>
            <ul>
              <li onClick={handleCloseBtnClick}>About</li>
              <li onClick={handleCloseBtnClick}>Services</li>
              <li onClick={handleCloseBtnClick}>Projects</li>
              <li onClick={handleCloseBtnClick} className='contactBtn uppercase text-center font-bold'>Contact</li>
            </ul>
            <a href="https://felixbaah.com/" target='_blank' className='font-bold uppercase'>Felix Baah</a>
          </MenuContainer>
        )}
      </AnimatePresence>



    </>

  )
}


