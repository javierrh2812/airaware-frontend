import Head from 'next/head';
import Image from 'next/image';
import { ButtonBorder, ButtonFill } from '../src/components/partials/';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Pages | AirAware</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <section className='px-4 py-24 mx-auto max-w-7xl'>
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
          <div>
            <p className='mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase'>
              Error 404
            </p>
            <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl font-sora'>
              Oops! La pagina que buscas no existe
            </h1>
            <p className='mb-5 text-base text-left text-gray-800 md:text-xl font-nunito'>
              Tal vez la pagina fue movida
            </p>
            <ButtonFill title={'Back to home'} />
            <ButtonBorder title={'Contact Us'} />
          </div>
          <div>
            <Image
              src={'/icon/not_found.svg'}
              width={300}
              height={350}
              alt={'icon'}
              className='w-full h-full py-48'
            />
          </div>
        </div>
      </section>
    </>
  );
}
