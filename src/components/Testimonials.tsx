import React from 'react'
import EmilyImg from '../assets/images/image-emily.jpg'
import ThomasImg from '../assets/images/image-thomas.jpg'
import JennieImg from '../assets/images/image-jennie.jpg'
import { H4, TestimonialsContainer } from '../styles/styledComponents/TestimonialsStyles'
import { GridContainer, ImageBlock } from '../styles/styledComponents/TextImageGridStyles'
import ConeDesktopImg from '../assets/images/desktop/image-gallery-cone.jpg'
import SugarDesktopImg from '../assets/images/desktop/image-gallery-sugarcubes.jpg'
import OrangeDesktopImg from '../assets/images/desktop/image-gallery-orange.jpg'
import MilkBottlesDesktopImg from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import ConeMobileImg from '../assets/images/mobile/image-gallery-cone.jpg'
import SugarMobileImg from '../assets/images/mobile/image-gallery-sugar-cubes.jpg'
import OrangeMobileImg from '../assets/images/mobile/image-gallery-orange.jpg'
import MilkBottlesMobileImg from '../assets/images/mobile/image-gallery-milkbottles.jpg'

export const Testimonials: React.FC = () => {

  // Testimonials
  const testimonials: { name: string, text: string, image: string, role: string }[] = [
    {
      name: "Emily R.",
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      image: EmilyImg,
      role: "Marketing Director"
    },
    {
      name: "Thomas S.",
      text: "Sunnyside’s enthusiasm coupled with their keen interest in our project made it a great experience.",
      image: ThomasImg,
      role: "Chief Operating Officer"
    },
    {
      name: "Jennie F.",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      image: JennieImg,
      role: "Business Owner"
    }
  ]




  return (
    <>
      <H4 className="testimonials__title text-center font-black uppercase"> client testimonials</H4>
      {/* Testimonials container */}
      <TestimonialsContainer>
        {testimonials.map((testimonial, index) => (
          <div className="testimonials__card" key={index}>
            <div className="testimonials__card__img">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <p className="testimonials__card__text__quote text-center font-semibold">“{testimonial.text}”</p>
            <div className="testimonials__card__text">
              <p className="testimonials__card__text__name font-black">{testimonial.name}</p>
              <p className="testimonials__card__text__role font-semibold">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </TestimonialsContainer>
      {/* photo gallery */}
      <GridContainer $photoGallery={true}>
        <ImageBlock $bgdesktop={MilkBottlesDesktopImg} $bgmobile={MilkBottlesMobileImg} $photoGallery={true} />
        <ImageBlock $bgdesktop={OrangeDesktopImg} $bgmobile={OrangeMobileImg} $photoGallery={true} />
        <ImageBlock $bgdesktop={ConeDesktopImg} $bgmobile={ConeMobileImg} $photoGallery={true} />
        <ImageBlock $bgdesktop={SugarDesktopImg} $bgmobile={SugarMobileImg} $photoGallery={true} />
      </GridContainer>
    </>
  )
}


