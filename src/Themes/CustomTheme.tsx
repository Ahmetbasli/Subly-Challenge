import { createTheme } from '@mui/material/styles'
const CustomTheme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#8a50f7',
    },
    secondary: {
      main: '#5e5e5e',
    },
    error: {
      main: '#ef9a9a',
    },
  },
})

export { CustomTheme }
