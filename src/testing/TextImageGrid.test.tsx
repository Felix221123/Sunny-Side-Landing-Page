// @ts-expect-error ignore the next line
import React from 'react'
import { screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TextImageGrid } from '../components/TextImageGrid'
import { render } from "../utils/test-utils"


describe("TextImageGrid Component" , () => {
  it("it should display the contents in the grid container", () => {
    render(<TextImageGrid />)

    const altImages = ["egg_image" , "cup_image"]
    const heading = ['Transform your brand','Stand out to the right audience']
    const paragraph = ['We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.','Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.']

    altImages.forEach((altValue) => {
      expect(screen.getByTestId(altValue)).toBeInTheDocument()
    })

    heading.forEach((eachText) => {
      expect(screen.getByText(eachText)).toBeInTheDocument()
    })

    paragraph.forEach((eachText) => {
      expect(screen.getByText(eachText)).toBeInTheDocument()
    })

  })
})
