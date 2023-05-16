// Testing Library
import { render, screen } from '@testing-library/react'

// Components
import Page from '../page'

it('must have heading', () => {
  render(<Page />)

  console.log('TEST')

  const headingEl = screen.getByRole('heading')

  expect(headingEl).toBeInTheDocument()
  expect(headingEl).toHaveTextContent('Page')
})
