import React from "react";
import Head from "next/head";

export default function MyApp(props) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>CovidHub</title>

        <link href="/manifest.json" rel="manifest" />
        <link rel="icon" href="/images/icon-129x129.png" />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}
