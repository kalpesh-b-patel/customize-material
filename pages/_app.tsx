import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/Layout/Layout';
import { DarkModeContext } from '../contexts/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [value, setValue] = useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  let theme = React.useMemo(
    () =>
      createMuiTheme({
        spacing: 8,
        palette: {
          type: value ? 'dark' : 'light',
          primary: {
            main: '#23F0C7',
          },
          secondary: {
            main: '#EF767A'
          }
        },
        typography: {
          fontSize: 10,
          body1: {
            fontSize: '1.2rem'
          },
          body2: {
            fontSize: '1rem'
          }
        },
        overrides: {
          MuiButton: {
            root: {
              textTransform: 'none',
              padding: '1rem',
              fontSize: '1.2rem',
            }
          },
          MuiIcon: {
            root: {
              fontSize: 'large',
            }
          }
        },
        props: {
          MuiButton: {
            disableRipple: true,
            variant: 'contained',
            color: 'secondary',
          },
          MuiIcon: {
            fontSize: 'large',
          }
        }
      }),
    [value],
  );
  theme = responsiveFontSizes(theme);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DarkModeContext.Provider value={{ value, setValue }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DarkModeContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};