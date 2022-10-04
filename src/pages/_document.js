import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <title>Ved's Portfolio</title>
          {/* <description>This is Ved Recharla's personal website , where apart from being his portfolio website , he also gives updates in life and boasts about the new skills he learned . So stay tuned !</description> */}
        
          <meta name="description" content="This is Ved Recharla's personal website , where apart from being his portfolio website , he also gives updates in life and boasts about the new skills he learned . So stay tuned !" />
          <meta name="keywords" content="HTML, CSS, JavaScript ,Next js ,React ,React js ,Portlio , Portfolio Website,Cv, Resume" />
          <meta name="author" content="ved Recharla"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}