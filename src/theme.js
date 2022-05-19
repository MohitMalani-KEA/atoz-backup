import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { styled } from '@mui/material'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#3F994F',
      main: '#33845C',
      contrastText: '#fff',
    },
    secondary: {
      light: 'whitesmoke',
      main: '#606164',
      dark: '#181919',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#181919',
      secondary: '#7C9E0A',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: ['Quicksand', `sans-serif`].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 990,
      lg: 1330,
      xl: 1970,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          '& a': {
            color: '#33845C',
            fontWeight: 'bold',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 0 },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
})

export default theme

export const ColorStripe = styled('div')({
  height: 5,
  width: '100%',
  background: 'rgb(141,176,30)',
  background:
    'linear-gradient(90deg, rgba(141,176,30,1) 0%, rgba(48,168,107,1) 25%, rgba(51, 132, 92,1) 100%)',
})
export const thinBorder = `.1px solid rgba(0,0,0,.1)`
