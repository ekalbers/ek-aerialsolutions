import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import StateProvider from '@/hooks/StateContext'

export default function Home() {

  return (
    <>
      <Head>
        <title>EK Aerial Solutions - Drone Services for Aerial Mapping, 3D Modeling, and Photography</title>
        <meta name="description" content="Unlock stunning perspectives with EK Aerial Solutions. Our drone services offer top-tier aerial photography and videography solutions. Capture the extraordinary from above. Visit us at www.ekaerialsolutions.com." />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
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
