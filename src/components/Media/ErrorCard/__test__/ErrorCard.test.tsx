import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

//components
import ErrorCard from '../ErrorCard'

// Define mock media data
const mockMediaData = {
  id: 3,
  name: 'dummy title 3',
  cover:
    'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/3.png',
  languages: ['en'],
  status: 'error',
  errorMessage: 'Failed while transcribing',
  createdAt: '2021-07-03T22:11:00.000Z',
  updatedAt: '2021-07-03T22:11:00.000Z',
}

describe('Media List', () => {
  it('Should render a medium with error status on loading the page', async () => {
    render(<ErrorCard medium={mockMediaData} />)
    expect(await screen.findByText('dummy title 3')).toBeInTheDocument()
    expect(screen.getByText('Error in processing')).toBeInTheDocument()
    expect(screen.getByTestId('error-message')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Delete file/i })
    ).toBeInTheDocument()
  })
})
