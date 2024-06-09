import React, {useState, useEffect} from "react";
import ThemeContextProvider from "../contexts/theme-context";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "./projects/projectPage.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const sentences = [
    "Once upon a time ...",
    "... In a faraway land ...",
    "... Lived a Developer...",
    "... Named Islem ...",
    "... Islem had a dream ...",
    "... To build websites ...",
    "... Practiced coding daily ...",
    "... Built a portfolio ...",
    "... Using Next.js ...",
    "... Showcased projects ...",
    "... and also skills ...",
    "... Impressed visitors ...",
    "... Opportunities came knocking ...",
    "... Dream became reality ❤️",
];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSentenceIndex(
        (prevIndex) => (prevIndex + 1) % sentences.length
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.title = sentences[currentSentenceIndex];
  }, [currentSentenceIndex]);
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
