import Document, { Html, Head, Main, NextScript } from 'next/document'



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,500&display=swap" rel="stylesheet" /> 
        </Head>
        <body className="relative h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument