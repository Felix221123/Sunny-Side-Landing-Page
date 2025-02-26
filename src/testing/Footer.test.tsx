// @ts-expect-error ignore the next line
import React from 'react'
import { screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from '../components/Footer'
import { render } from "../utils/test-utils"



describe("Footer Component" , () => {

  it("it should display the logo and the social media content" , () => {
    render(<Footer />)
    expect(screen.getByAltText(/logo for the footer/i)).toBeInTheDocument()

    const social_icons:string[] = ['facebook_logo','instagram_logo','twitter_logo','pinterest_logo']

    social_icons.forEach((eachAlt) => {
      expect(screen.getByAltText(eachAlt)).toBeInTheDocument()
    })

  })
})
