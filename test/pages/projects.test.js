import React from 'react'
import { render } from '@testing-library/react'
import ProjectPage from '../../src/pages/projects'

describe('src/pages/projects.js', () => {
  const { getByTestId } = render(<ProjectPage />)

  it('Displays the correct title', () => {
    expect(getByTestId('projects-container')).toBeDefined()
  })
})
