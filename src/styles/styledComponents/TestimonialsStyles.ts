// Testimonials styles
import styled from "styled-components"
import { flexCenter, fontSize14px } from "../mixins"
import { fontSize16px, fontSize20px } from "../mixins"


export const H4 = styled.h4`
  letter-spacing: 5px;
  font-family: ${props => props.theme.fonts.fraunces};
  color: ${props => props.theme.colors.darkGrayishBlue};
  ${fontSize16px};
  margin-top: 5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    ${fontSize20px};
    letter-spacing: 4px;
  }
`

export const TestimonialsContainer = styled.div`
  ${flexCenter("column", "center")};
  gap: 2rem;
  margin-bottom: 7rem;

  @media (min-width: 768px) {
    ${flexCenter("row", "space-between")};
    gap: 2.5rem;
    padding: 1.5rem 4rem;
  }

  > .testimonials__card{
   ${flexCenter("column", "center")};
   gap: 2.5rem;
   padding: 0rem 2rem;

   > .testimonials__card__img{
      width: 72px;
      height: 72px;
      border-radius: 50%;

      > img{
        border-radius: 50%;
      }
    }

    > .testimonials__card__text__quote{
      color: ${props => props.theme.colors.veryDarkGrayishBlue};
      font-family: ${props => props.theme.fonts.barlow};
      ${fontSize16px};
      line-height: 1.6rem;
      text-align: center;
    }

    > .testimonials__card__text{
     ${flexCenter("column", "center")};
     gap: .25rem;

     > .testimonials__card__text__name{
        font-family: ${props => props.theme.fonts.fraunces};
        ${fontSize16px};
        color: ${props => props.theme.colors.veryDarkSaturatedBlue};
      }
        > .testimonials__card__text__role{
          color: ${props => props.theme.colors.darkGrayishBlue};
          font-family: ${props => props.theme.fonts.barlow};
          ${fontSize14px};
        }
     }

  }
`
