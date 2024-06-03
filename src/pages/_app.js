import React from "react";
import ThemeContextProvider from "../contexts/theme-context";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import './projects/projectPage.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Head>
        <title>Islem Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default App;
