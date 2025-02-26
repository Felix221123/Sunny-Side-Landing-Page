// @ts-expect-error ignore the next line
import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from '../components/Navbar'
import { render } from "../utils/test-utils"


describe('Navbar Component', () => {
  it('it should display the logo', () => {
    render(<Navbar />)
    expect(screen.getByTestId("logo")).toBeInTheDocument()
  })

  it('it should display the menu links and its hamburger', () => {
    render(<Navbar />)
    const navLinks:string[] = ["Services", "About", "Contact", "Projects"]
    navLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })

    const hamburger = screen.getByAltText(/menuHamburger/i)
    if (window.innerWidth < 768) {
      expect(hamburger).toBeInTheDocument()
    }
  })

  it('when the hamburger is clicked, the menu container should go show up and when the close button is clicked, it should go away', () => {
    render(<Navbar />)
    const hamburger = screen.getByAltText(/menuHamburger/i)

    if (window.innerWidth < 768) {
      expect(hamburger).toBeInTheDocument()
      fireEvent.click(hamburger)
      const menuContainer = screen.getByTestId("menuContainer")
      expect(menuContainer).toBeInTheDocument()
      const closeBtn = screen.getByAltText("close_btn")
      fireEvent.click(closeBtn)
      expect(menuContainer).not.toBeInTheDocument()
    }

  })
})
