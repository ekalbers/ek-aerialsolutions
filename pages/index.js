import Head from "next/head";
import Script from 'next/script'
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import StateProvider from '@/hooks/StateContext'

export default function Home() {

  return (
    <>
      <Head>
        <title>Drone Services - Aerial Photography - Construction Monitoring</title>
        <meta name="description" content="Our drone services offer top-tier aerial photography, construction progress monitoring, and More." />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <meta name="ahrefs-site-verification" content="b1aaaaf4c137c95893ffb1fc663642599cbab96e6cf4acf5d9c67c21069a153b" />
        <link rel='icon' href='/ek-drones-website-favicon-white.png'/>

      </Head>
      {/* Google Analytics */}
      <Script id='google' src="https://www.googletagmanager.com/gtag/js?id=G-QV48DYNR5L">
      </Script>
      <Script id='google'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QV48DYNR5L');
        `}
      </Script>
      <StateProvider>
        <Header />
        <Main />
        <Footer />
      </StateProvider>
    </>
  )
}
