import React from 'react'
import EggDesktopImg from "../assets/images/desktop/image-transform.jpg"
import EggMobileImg from "../assets/images/mobile/image-transform.jpg"
import CupDesktopImg from "../assets/images/desktop/image-stand-out.jpg"
import CupMobileImg from "../assets/images/mobile/image-stand-out.jpg"
import GraphicDesktopImg from "../assets/images/desktop/image-graphic-design.jpg"
import GraphicMobileImg from "../assets/images/mobile/image-graphic-design.jpg"
import PhotographyDesktopImg from "../assets/images/desktop/image-photography.jpg"
import PhotographyMobileImg from "../assets/images/mobile/image-photography.jpg"
import {
  GridContainer,
  ImageBlock,
  TextBlock,
  Row,
  TextImageContainer,
  TextBlock2
}
  from '../styles/styledComponents/TextImageGridStyles'





export const TextImageGrid: React.FC = () => {

  return (
    <>
      <GridContainer>
        {/* First row - Reversed on Mobile */}
        <Row $reverse={true} className='first-col-reverse'>
          <ImageBlock $bgdesktop={EggDesktopImg} $bgmobile={EggMobileImg} className="image" />
          <TextBlock className="text">
            <h2 className='font-black'>Transform your brand</h2>
            <p className="description font-semibold">
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <a href="#" className='font-black'>LEARN MORE</a>
          </TextBlock>
        </Row>

        {/* Second row - Normal order */}
        <Row>
          <ImageBlock className="image" $bgdesktop={CupDesktopImg} $bgmobile={CupMobileImg} />
          <TextBlock className="text">
            <h2 className='font-black'>Stand out to the right audience</h2>
            <p className="description font-semibold">
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
            </p>
            <a href="#" className='font-black'>LEARN MORE</a>
          </TextBlock>
        </Row>
      </GridContainer>

      {/* second grid container */}
      <Row>
        <TextImageContainer>
          <ImageBlock $bgdesktop={GraphicDesktopImg} $bgmobile={GraphicMobileImg} className="image" $height='600px' />
          <TextBlock2>
            <h3 className='font-black'>Graphic Design</h3>
            <p className="description font-semibold text-center">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </TextBlock2>
        </TextImageContainer>

        <TextImageContainer>
          <ImageBlock $bgdesktop={PhotographyDesktopImg} $bgmobile={PhotographyMobileImg} className='image' $height='600px'/>
          <TextBlock2>
            <h3 className='font-black'>Photography</h3>
            <p className="description font-semibold text-center">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </TextBlock2>
        </TextImageContainer>

      </Row>
    </>

  )
}


