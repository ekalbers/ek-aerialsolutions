import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import StateProvider from '@/hooks/StateContext'

export default function Home() {

  return (
    <>
      <Head>
        <title>EK Aerial Solutions - Drone Services Provider</title>
        <meta name="description" content="Unlock stunning perspectives with EK Aerial Solutions. Our drone services offer top-tier aerial photography, orthmosaic mapping, 3D Modeling, and More. Capture the extraordinary from above. Visit us at www.ekaerialsolutions.com." />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <meta name="ahrefs-site-verification" content="b1aaaaf4c137c95893ffb1fc663642599cbab96e6cf4acf5d9c67c21069a153b" />
        <link rel='icon' href='/ek-drones-website-favicon-white.png'/>
      </Head>
      <StateProvider>
        <Header />
        <Main />
        <Footer />
      </StateProvider>
    </>
  )
}
