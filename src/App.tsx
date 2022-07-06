//component
import MediaList from './components/Media/MediaList'

//styles
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header/Header'

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <MediaList />
    </>
  )
}

export default App
