//component
import MediaList from './components/Media/MediaList'

//styles
import CssBaseline from '@mui/material/CssBaseline'

import Layout from './components/Layout/Layout'

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <MediaList />
      </Layout>
    </>
  )
}

export default App
