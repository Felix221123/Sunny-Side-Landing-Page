import { flexCenter } from '../mixins';
// footer styles
import styled from "styled-components"



export const FooterContainer = styled.footer`
  width: 100%;
  padding: 4rem 2rem;
  ${flexCenter("column", "center")};
  color: ${props => props.theme.colors.darkGrayishBlue};
  font-family: ${props => props.theme.fonts.barlow};
  background-color: ${props => props.theme.colors.footerClr};
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }

  > ul{
    ${flexCenter("row", "center")};
    gap: 2rem;
    margin-bottom: 3rem;

    > li{
      cursor: pointer;
      color: ${props => props.theme.colors.darkGrayishBlue};
      font-family: ${props => props.theme.fonts.barlow};

      &:hover{
        color: ${props => props.theme.colors.whiteClr};
      }
    }
  }

  > .socialIcons{
    ${flexCenter("row", "center")};
    gap: 2rem;

  }
`
