import React from 'react'
import { render } from '@testing-library/react'
import LandingPage from '../../src/pages'

describe('src/pages/index.js', () => {
  const { getByTestId } = render(<LandingPage />)

  it('Displays the first section correctly', () => {
    expect(getByTestId('landing-container')).toBeDefined()
  })
})
