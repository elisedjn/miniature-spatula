import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import { AppWrapper } from '../contexts/state';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <div>
        <Head>
          <title>Marley Spoon - Minitature Spatula</title>
          <meta name='description' content='Front end code challenge for Marley Spoon' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <main className='bg-neutral-100 min-h-full p-8 pt-16 '>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AppWrapper>
  );
}
