import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>E.K. Drones</title>
        <meta name="description" content="Homepage for EK Drones" />
        <link rel='icon' href='/ek-drones-website-favicon-white.png'/>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
