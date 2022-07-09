import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

//component
import TranscribingCard from '../TranscribingCard'

// Define mock media data
const mockMediaData = {
  id: 4,
  name: 'dummy title 4',
  cover:
    'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/4.png',
  languages: ['en'],
  status: 'transcribing',
  createdAt: '2021-07-03T22:15:00.000Z',
  updatedAt: '2021-07-03T22:17:00.000Z',
}

describe('Media List', () => {
  it('Should render a medium with transcribing status on loading the page', async () => {
    render(<TranscribingCard medium={mockMediaData} />)
    expect(await screen.findByText('dummy title 4')).toBeInTheDocument()
    expect(screen.getByText('Transcribing')).toBeInTheDocument()
    expect(screen.getByAltText('dummy title 4')).toBeTruthy()
    expect(screen.getByAltText('dummy title 4')).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/4.png'
    )
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByText('Transcribing subtitles')).toBeInTheDocument()
  })
})
