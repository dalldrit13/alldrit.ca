import React from 'react'
import { render } from '@testing-library/react'
import ContactPage from '../../src/pages/contact'

describe('src/pages/contact.js', () => {
  const { getByTestId } = render(<ContactPage />)

  it('Displays the correct title', () => {
    expect(getByTestId('contact-container')).toBeDefined()
  })
})
