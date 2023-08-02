import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import StateProvider from '@/hooks/StateContext'

export default function Home() {

  return (
    <>
      <Head>
        <title>E.K. Drones</title>
        <meta name="description" content="Homepage for EK Drones" />
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
