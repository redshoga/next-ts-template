import React from "react";
import { AppProps } from "next/app";
import "../assets/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;
