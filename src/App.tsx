//component
import MediaList from './components/Media/MediaList'

//styles
import CssBaseline from '@mui/material/CssBaseline'

import Layout from './components/Layout/Layout'
import { CustomTheme } from './Themes/CustomTheme'
import { ThemeProvider } from '@mui/material/styles'

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <Layout>
          <MediaList />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
