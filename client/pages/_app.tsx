import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>عوالم</title>
        <meta name="description" content="عوالم, لعبه زي كدا" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} dir="rtl" />
    </>
  );
}
