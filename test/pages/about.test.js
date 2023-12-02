import React from 'react'
import { render } from '@testing-library/react'
import AboutPage from '../../src/pages/about'

describe('src/pages/about.js', () => {
  const { getByTestId } = render(<AboutPage />)

  it('Displays the correct title', () => {
    expect(getByTestId('about-container')).toBeDefined()
  })
})
