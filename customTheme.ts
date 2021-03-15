import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

export let customTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#e0f7fa',
      main: '#00bcd4',
      dark: '#006064',
    },
    // secondary: {},
    // success: {},
    // info: {},
    // warning: {},
    // error: {},
  }
});

customTheme = responsiveFontSizes(customTheme);