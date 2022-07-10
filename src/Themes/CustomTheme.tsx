import { createTheme } from '@mui/material/styles'
const CustomTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h1',
          },
          style: {
            fontSize: 24,
            fontWeight: 'bold',
          },
        },
        {
          props: {
            variant: 'h3',
          },
          style: {
            fontSize: 18,
            fontWeight: 'bold',
          },
        },
        {
          props: {
            variant: 'body1',
          },
          style: {
            fontSize: 14,
          },
        },
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 12,
          },
        },
      ],
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
