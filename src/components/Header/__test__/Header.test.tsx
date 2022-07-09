import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Header
import Header from '../Header'

it('Should render header component', () => {
  render(<Header />)
  const headingElement = screen.getByText('Subly')
  expect(headingElement).toBeInTheDocument()
})
