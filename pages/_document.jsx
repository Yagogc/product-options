/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { getCssString } from '../styles/config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
