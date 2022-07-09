import { render, screen, cleanup, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event'

//component
import MediaList from '../MediaList'

// Define mock API response with dummy data
const handlers = [
  rest.get(
    'https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          media: [
            {
              id: 1,
              name: 'dummy title 1',
              cover:
                'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/1.jpg',
              languages: ['en'],
              status: 'ready',
              createdAt: '2021-05-01T10:00:00.000Z',
              updatedAt: '2021-05-01T10:00:00.000Z',
            },
            {
              id: 2,
              name: 'dummy title 2',
              cover:
                'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/2.jpg',
              languages: ['en', 'nl', 'cz'],
              status: 'ready',
              createdAt: '2021-06-02T10:21:00.000Z',
              updatedAt: '2021-06-03T19:12:00.000Z',
            },
            {
              id: 3,
              name: 'dummy title 3',
              cover:
                'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/3.png',
              languages: ['en'],
              status: 'error',
              errorMessage: 'Failed while transcribing',
              createdAt: '2021-07-03T22:11:00.000Z',
              updatedAt: '2021-07-03T22:11:00.000Z',
            },
            {
              id: 4,
              name: 'dummy title 4',
              cover:
                'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/4.png',
              languages: ['en'],
              status: 'transcribing',
              createdAt: '2021-07-03T22:15:00.000Z',
              updatedAt: '2021-07-03T22:17:00.000Z',
            },
          ],
        })
      )
    }
  ),
]

// Set the above info in the server
const server = setupServer(...handlers)
// Set up mock server before testing
beforeAll(() => {
  server.listen()
})
// Avoid side-effect between each test
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
// Close server after finishing all the tests
afterAll(() => {
  server.close()
})

describe('Media List', () => {
  it('Should render a list of mediums with API call', async () => {
    render(<MediaList />)
    expect(await screen.findByText('dummy title 1')).toBeInTheDocument()
    expect(screen.getByText('dummy title 2')).toBeInTheDocument()
    expect(screen.getByText('dummy title 3')).toBeInTheDocument()
    expect(screen.getByText('dummy title 4')).toBeInTheDocument()
  })
  it('Should render correct options when the status filter is opened', async () => {
    render(<MediaList />)
    expect(await screen.findByLabelText('Status')).toBeInTheDocument()
    userEvent.click(screen.getByLabelText('Status'))
    userEvent.click(within(screen.getByRole('listbox')).getByText('Ready'))
  })
  it('Should render correct options when the language filter is opened', async () => {
    render(<MediaList />)
    expect(await screen.findByLabelText('Language')).toBeInTheDocument()
    userEvent.click(screen.getByLabelText('Language'))
    expect(await screen.findByText('English')).toBeInTheDocument()
  })
})
