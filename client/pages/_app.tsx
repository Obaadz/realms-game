import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store";

export const BACKEND_URL = process.env.BACKEND_URL as string;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>عوالم</title>
        <meta name="description" content="عوالم, لعبه زي كدا" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} dir="rtl" />
      </Provider>
    </>
  );
}
