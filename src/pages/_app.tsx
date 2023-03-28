import '@/styles/globals.css'
import Layout from 'components/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { SessionProvider } from "next-auth/react";
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  const imageUrl = "public/thumbnail.png";

  return (
    <>
      <Script id='Adsense-id' data-ad-client='ca-pub-4777140716080479' async strategy='afterInteractive' onError={(e) => {console.error('Script failed to load', e)}} src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' crossOrigin='anonymous' />
      <SessionProvider session={pageProps.session}>
        <Head>
          <link rel='icon' href="/favicon.png" />
          <meta property="og:url" content="https://elysiumrealm.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Elysium Realm | Home" />
          <meta property="og:description" content="Find paradise in a website here" />
          <meta property="og:image" content={imageUrl} />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="elysiumrealm.com" />
          <meta property="twitter:url" content="https://elysiumrealm.com/" />
          <meta name="twitter:title" content="Elysium Realm | Home" />
          <meta name="twitter:description" content="Find paradise in a website here" />
          <meta name="twitter:image" content={imageUrl} />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>    
      </SessionProvider>
    </>
  )
}
