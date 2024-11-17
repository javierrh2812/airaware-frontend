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
          content='Monitoreo de calidad del aire'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      {children}

      <Footer />
    </>
  );
}
