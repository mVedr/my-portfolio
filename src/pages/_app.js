import Theme from '../styles/theme';

import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}