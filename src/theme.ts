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
      fontSize: 20,
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
    },
    palette: {
      text: {
        primary: '#004884',
      },
      primary: {
        main: '#007ee6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
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
