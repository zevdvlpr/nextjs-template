import React from 'react';
import { ServerStyleSheet } from 'styled-components';

import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    return {
      styleElements: sheet.getStyleElement(),
      ...renderPage(Component => props =>
        sheet.collectStyles(<Component {...props} />),
      ),
    };
  }

  render() {
    const { styleElements } = this.props;

    return (
      <html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="nextjs-main-template" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/css/styles.css" />

          <link rel="icon" href="/favicon.png" />

          {styleElements}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
