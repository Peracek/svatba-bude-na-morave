import deepMerge from 'deepmerge'
import { red } from '@material-ui/core/colors'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
  Theme,
} from '@material-ui/core/styles'

const makeTheme = (variant: ThemeOptions): Theme => {
  const common = {
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 18,
      fontWeightLight: 200,
      h1: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 600,
        fontSize: 50,
        letterSpacing: '5px',
        textTransform: 'uppercase',
      },
      h3: {
        fontWeight: 600,
        fontSize: 25,
        letterSpacing: '0.6px',
        textTransform: 'uppercase',
        paddingBottom: '12px',
      },
    },
    palette: {
      palette: {
        type: 'light',
      },
      text: {
        primary: '#004884',
      },
      primary: {
        main: '#007ee6',
      },
      secondary: {
        main: '#007ee6',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#FFF',
      },
    },
  }

  const theme = createMuiTheme(deepMerge(common, variant))
  return responsiveFontSizes(theme)
}

const light: ThemeOptions = {
  palette: {
    type: 'light',
  },
}

const dark: ThemeOptions = {
  palette: {
    type: 'dark',
  },
}

const themes = {
  light: makeTheme(light),
  dark: makeTheme(dark),
}

export default themes
