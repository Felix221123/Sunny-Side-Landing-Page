// @ts-expect-error ignore the next line
import React from 'react'
import { screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from '../components/Testimonials'
import { render } from "../utils/test-utils"


describe('Testimonials Component', () => {
  it('it should display the header and the testimonials container and its content', () => {
    render(<Testimonials />)
    expect(screen.getByRole("heading", { name: /client testimonials/i})).toBeInTheDocument();

    expect(screen.getByTestId("testimonials-container")).toBeInTheDocument();

  })

  it('it should display the grid photos of the container', () => {
    render(<Testimonials />)

    expect(screen.getByTestId('grid_container')).toBeInTheDocument()

  })
})
