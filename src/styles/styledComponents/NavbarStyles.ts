//  Navbar styles
import styled from "styled-components";
import {
  backgroundImage,
  flex,
  flexCenter,
  hiddenElementMoreThan768px,
  hiddenElementLessThan767px,
  fontSize18px,
  fontSize15px,
  fontSize40px,
  fontSize56px,
  transitionHovers
}
  from "../mixins";
import mobileBg from "../../assets/images/mobile/image-header.jpg";
import desktopBg from "../../assets/images/desktop/image-header.jpg";
import { motion } from "motion/react";



export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  ${backgroundImage(mobileBg)}

  > .imgContainer{
    padding-top: 2rem;
    padding-bottom: 9rem;
    ${flexCenter("column", "center")};

    @media (min-width: 768px) {
      padding-top: 0rem;
      padding-bottom: 21rem;
    }
  }


  @media (min-width: 768px) {
    ${backgroundImage(desktopBg)}
  }
`;


export const Header = styled.header`
  width: 100%;
  ${flexCenter("row", "space-between")}
  padding: 1.5rem 2rem;


  > nav{
    ${hiddenElementLessThan767px}
  }


  @media (min-width: 768px) {
    padding: 2.5rem 4rem;

    > .menuHamburger{
      ${hiddenElementMoreThan768px}
    }

    > nav > ul{
      ${flexCenter("row", "space-between")};
      gap: 3rem;
      color: ${props => props.theme.colors.whiteClr};
      cursor: pointer;
      ${fontSize18px}
      font-family: ${props => props.theme.fonts.barlow};

      > .contactBtn{
        padding: 1rem 1.5rem;
        background: ${props => props.theme.colors.whiteClr};
        border-radius: 1.75rem;
        color: ${props => props.theme.colors.darkDesaturatedCyan};
        ${fontSize15px}
        font-family: ${props => props.theme.fonts.fraunces};

        &:hover{
          background: rgba(255, 255, 255, 0.5);
          color: ${props => props.theme.colors.whiteClr};
          ${transitionHovers}
        }
      }

    }
  }
`;

export const MenuContainer = styled(motion.div)`
  ${flex("column")}
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  background-color: ${props => props.theme.colors.whiteClr};
  z-index: 2;
  color: ${props => props.theme.colors.darkDesaturatedCyan};
  ${fontSize18px}
  font-family: ${props => props.theme.fonts.barlow};
  transition: all 0.3s ease-in-out;

  > .closeBtn{
    position: absolute;
    top: 5%;
    right: 10%;
    cursor: pointer;
  }

  > ul{
    ${flex("column")}
    gap: 2rem;
    padding: 8rem 3rem 0rem 3rem;

    > li{
      cursor: pointer;
    }
    > .contactBtn{
      padding: 1rem 1.5rem;
      background: ${props => props.theme.colors.yellowClr};
      border-radius: 1.75rem;
      color: ${props => props.theme.colors.darkDesaturatedCyan};
      ${fontSize15px}
      font-family: ${props => props.theme.fonts.fraunces};
    }
  }

  > a {
    position: absolute;
    bottom: 5%;
    padding: 0rem 2rem;
    color: ${props => props.theme.colors.darkDesaturatedCyan};
    ${fontSize15px}
    font-family: ${props => props.theme.fonts.fraunces};
  }
`;

export const H1 = styled.h1`
  color: ${props => props.theme.colors.whiteClr};
  ${fontSize40px}
  font-family: ${props => props.theme.fonts.fraunces};
  padding: 3.5rem 2rem;
  letter-spacing: 6.25px;

  @media (min-width: 768px) {
    padding: 5rem 4rem;
    ${fontSize56px};
    letter-spacing: 8.75px;
  }
`
