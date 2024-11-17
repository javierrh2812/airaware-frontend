import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='Air Quality Monitoring website kalipaten'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      {children}

      <Footer />
    </>
  );
}
