import "../styles/globals.scss";
import { useState } from "react";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

///  Modal.setAppElement("#root");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
