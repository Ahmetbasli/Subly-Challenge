import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

//components
import ReadyCard from '../ReadyCard'

// Define mock media data
const mockMediaData = {
  id: 1,
  name: 'dummy title 1',
  cover:
    'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/1.jpg',
  languages: ['en'],
  status: 'ready',
  createdAt: '2021-05-01T10:00:00.000Z',
  updatedAt: '2021-05-01T10:00:00.000Z',
}

describe('Media List', () => {
  it('Should render a medium with ready status on loading the page', async () => {
    render(<ReadyCard medium={mockMediaData} />)
    expect(await screen.findByText('dummy title 1')).toBeInTheDocument()
    expect(screen.getByAltText('dummy title 1')).toBeTruthy()
    expect(screen.getByAltText('dummy title 1')).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/1.jpg'
    )
    expect(screen.getByText('1 language')).toBeInTheDocument()
  })

  it('Should render an edit button, delete icon, and language number on hover state', async () => {
    render(<ReadyCard medium={mockMediaData} />)
    expect(await screen.findByText('dummy title 1')).toBeInTheDocument()
    userEvent.hover(screen.getByTestId('medium-image'))
    expect(screen.getByRole('button', { name: /Edit/i })).toBeInTheDocument()
    userEvent.unhover(screen.getByTestId('medium-image'))
    expect(
      screen.queryByRole('button', { name: /Edit/i })
    ).not.toBeInTheDocument()
  })
  it('Should render how many languages the medium has on hover state', async () => {
    render(<ReadyCard medium={mockMediaData} />)
    expect(await screen.findByText('dummy title 1')).toBeInTheDocument()
    userEvent.hover(screen.getByTestId('medium-image'))
    expect(screen.getByText('1 language')).toBeInTheDocument()
  })
})
