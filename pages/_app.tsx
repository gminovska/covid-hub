import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useMediaQuery, createMuiTheme } from "@material-ui/core";
//@ts-ignore
import ArchiaWoff2 from "../fonts/archia-regular-webfont.woff2";

const archia = {
  fontFamily: "Archia",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    local('Archia-Regular'),
    url(${ArchiaWoff2}) format('woff2')
  `,
};
export default function MyApp(props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: [
            "Archia",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              "@font-face": [archia],
            },
          },
        },

        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: prefersDarkMode ? "#64f1ff" : "#ef1282", // #65f5e8, #00bcdc
          },
          secondary: {
            main: prefersDarkMode ? "#FCD92A" : "#g3g3g3", // #a4afb7, #d6cfab
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
