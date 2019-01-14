import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

/* eslint-disable no-unused-expressions */
injectGlobal`
  html, body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: #434e5a;  
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    background-color: linear-gradient(to right bottom, rgb(255, 10, 137), rgb(67, 84, 177), darkslateblue);
  }
  
`;
class MyDocument extends Document {
    static getInitialProps({ renderPage }: any) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App: any) => (props: any) =>
          sheet.collectStyles(<App {...props} />),
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
      }
    render() {
        return (
        <html>
            <Head>
                <title>Search</title>
                {this.props.styleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </html>
        )
    };
}

export default MyDocument;
