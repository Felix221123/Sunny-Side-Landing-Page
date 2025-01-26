import { backgroundImage, flex, flexCenter, fontSize15px, fontSize18px, fontSize28px, fontSize40px } from './../mixins';
// Text image grid styles
import styled from "styled-components";
import { fontSize32px } from "../mixins";



export const GridContainer = styled.section<{ $photoGallery?: boolean }>`
  display: grid;
  width: 100%;

  ${(props) =>
    props.$photoGallery
      ? `
        /* Photo gallery grid layout */
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;

        @media (max-width: 767px) {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, auto);
        }
      `
      : `
        /* Default text-image layout */
        grid-template-rows: 1fr 1fr;

        @media (max-width: 767px) {
          grid-template-columns: 1fr;
        }
      `}
`;


export const Row = styled.div<{ $reverse?: boolean }>`
  width: 100%;
  align-items: stretch;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .image {
      order: ${(props) => (props.$reverse ? "2" : "1")}; /* Reverses only the first row */
    }

    .text {
      order: ${(props) => (props.$reverse ? "1" : "2")}; /* Reverses only the first row */
    }
  }
`;

export const TextBlock = styled.div`
  flex: 1;
  padding: 3.5rem 2rem;
  ${flexCenter("column", "center")};
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 5rem 4rem;
    ${flex("column")}
    align-items: flex-start;
  }

  > h2{
   ${fontSize32px}
   font-family: ${props => props.theme.fonts.fraunces};
   color: ${props => props.theme.colors.veryDarkSaturatedBlue};
   text-align: center;

   @media (min-width: 768px) {
    ${fontSize40px};
    text-align: left;
    padding-right: 25%;
   }
  }

  > p.description{
    color: ${props => props.theme.colors.darkGrayishBlue};
    font-family: ${props => props.theme.fonts.barlow};
    text-align: center;
    ${fontSize18px};
    letter-spacing: -0.13px;

    @media (min-width: 768px) {
      text-align: left;
      padding-right: 25%;
    }
  }

  > a{
    color: ${props => props.theme.colors.veryDarkSaturatedBlue};
    text-decoration: none;
    font-family: ${props => props.theme.fonts.fraunces};
    letter-spacing: 1px;
    text-align: center;
    ${fontSize15px};

  }

`

export const ImageBlock = styled.div<{
  $bgdesktop: string;
  $bgmobile: string;
  $photoGallery?: boolean;
  $height?: string;
}>`
  flex: 1;
  ${(props) => backgroundImage(props.$bgdesktop)}

  height: ${(props) =>
    props.$height
      ? props.$height  // If $height is provided, use it
      : props.$photoGallery
        ? "447px"  // If in photo gallery mode, use 447px
        : "600px"};  // Default height

  @media (max-width: 767px) {
    ${(props) => backgroundImage(props.$bgmobile)}

    height: ${(props) =>
      props.$height
        ? props.$height  // Use provided $height
        : props.$photoGallery
          ? "200px"  // If photo gallery mode, use 200px
          : "320px"};  // Default mobile height
  }
`;




export const TextImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`


export const TextBlock2 = styled.div`
  position: absolute;
  top: 27%;
  left: 0;
  width: 100%;
  height: 100%;
  ${flexCenter("column", "center")};
  padding: 3.5rem 2rem;
  gap: 1rem;



  > h3{
   ${fontSize28px};
   letter-spacing: -0.2px;
   font-family: ${props => props.theme.fonts.fraunces};
   color: ${props => props.theme.colors.darkBlue};
   }

   > p.description{
    line-height: 1.6rem;
    color: ${props => props.theme.colors.darkBlue};
    font-family: ${props => props.theme.fonts.barlow};
    padding: 0 1rem;

    @media (min-width: 768px) {
      padding: 0 23%;
    }

`
