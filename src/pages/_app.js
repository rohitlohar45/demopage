import React from "react";
import Script from "next/script";
import Head from "next/head";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import "../styles/globals.css";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";
import { AuthUserProvider } from "../firebase/auth";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isPathAdmin =
    router.pathname.startsWith("/admin") || router.pathname.includes("/login");

  return (
    <>
      <Head>
        <title>Peace Interiors</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Cursor />
      <LoadingScreen />

      <Toaster position="top-center" />
      {isPathAdmin ? (
        <AuthUserProvider>
          <Component {...pageProps} />
        </AuthUserProvider>
      ) : (
        <Component {...pageProps} />
      )}

      <ScrollToTop />

      <Script id="wow" src="/assets/js/wow.min.js"></Script>
      <Script
        id="splitting"
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>

      <Script
        id="simpleParallax"
        src="/assets/js/simpleParallax.min.js"
      ></Script>
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js"></Script>

      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload"></Script>
    </>
  );
}

export default MyApp;
