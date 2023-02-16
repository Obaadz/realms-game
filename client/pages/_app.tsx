import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>La Vie</title>
        <meta
          name="description"
          content="La vie, An eCommerce platform that sell plants"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
