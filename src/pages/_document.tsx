import Document, { Head, Main } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <Script
            data-cfasync="false"
            src="//db033pq6bj64g.cloudfront.net/?bqpbd=977886"
          />
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
}

export default MyDocument;