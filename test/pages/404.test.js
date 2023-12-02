import React from 'react'
import { render } from '@testing-library/react'
import NotFoundPage from '../../src/pages/404'

describe('src/pages/404.js', () => {
  const { getByTestId } = render(<NotFoundPage />)

  it('Displays the correct display text', () => {
    expect(getByTestId('404-container')).toBeDefined()
    expect(getByTestId('notfound-text')).toHaveTextContent('Page Not Found')
  })
})
