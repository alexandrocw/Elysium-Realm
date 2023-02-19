import '@/styles/globals.css'
import Layout from 'components/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <link rel='icon' href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    </SessionProvider>
  )
}
