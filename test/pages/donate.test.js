import React from 'react'
import { render } from '@testing-library/react'
import DonatePage from '../../src/pages/donate'

describe('src/pages/donate.js', () => {
  const { getByTestId } = render(<DonatePage />)

  it('Displays the correct title', () => {
    expect(getByTestId('donate-container')).toBeDefined()
  })
})
