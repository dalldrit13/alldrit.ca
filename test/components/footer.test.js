import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../../src/components/footer'

describe('src/components/footer.js', () => {
  const { getByTestId } = render(<Footer />)

  it('renders footer', () => {
    expect(getByTestId('footer')).toBeTruthy()
    expect(getByTestId('footer-link')).toHaveTextContent('Alldrit Technologies info@alldrit.ca')
  })
})
