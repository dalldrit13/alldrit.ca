import React from 'react'
import { render } from '@testing-library/react'
import Navbar from '../../src/components/navbar'

describe('src/components/navbar.js', () => {
  const { getByTestId } = render(<Navbar />)

  it('renders navbar', () => {
    expect(getByTestId('navbar')).toHaveTextContent('About')
    expect(getByTestId('navbar')).toHaveTextContent('Projects')
    expect(getByTestId('navbar')).toHaveTextContent('Contact')
  })
})
