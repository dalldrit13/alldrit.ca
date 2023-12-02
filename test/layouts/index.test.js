import React from 'react'
import { render } from '@testing-library/react'
import Wrapper from '../../src/layouts'

describe('src/layouts/index.js', () => {
  const { getByTestId } = render(
    <Wrapper>
      <div data-testid="test-id">This should be here</div>
    </Wrapper>
  )

  it('renders children', () => {
    expect(getByTestId('rocket')).toBeTruthy()
    expect(getByTestId('test-id')).toHaveTextContent('This should be here')
  })
})
