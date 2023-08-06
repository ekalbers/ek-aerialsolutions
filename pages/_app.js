import '@/styles/globals.css'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Analytics} from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <Analytics />
    </UserProvider>
  )
}
