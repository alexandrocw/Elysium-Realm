import '@/styles/globals.css'
import Layout from 'components/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  const imageUrl = "public/thumbnail.png";

  return (
    <>
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
