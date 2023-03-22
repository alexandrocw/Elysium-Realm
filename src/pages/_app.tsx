import '@/styles/globals.css'
import Layout from 'components/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { SessionProvider } from "next-auth/react";
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id='Adsense-id' data-ad-client='ca-pub-4777140716080479' async strategy='afterInteractive' onError={(e) => {console.error('Script failed to load', e)}} src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
      <SessionProvider session={pageProps.session}>
        <Head>
          <link rel='icon' href="/favicon.png" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>    
      </SessionProvider>
    </>
  )
}
