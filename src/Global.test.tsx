// @ts-expect-error ignore the next line
import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('it should display the logo in the navbar component', () => {
    render(<App />)
    expect(screen.getByTestId("logo")).toBeInTheDocument()
  })
})
