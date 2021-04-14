import Head from 'next/head'

import { globalStyles } from '../styles/config'

function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <>
      <Head>
        <title>Product Options</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
