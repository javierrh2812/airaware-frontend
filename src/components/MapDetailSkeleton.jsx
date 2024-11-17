import Layout from './Layout';

export default function MapDetailSkeleton() {
  return (
    <Layout title={'Airly | Detail Device'}>
      <div className='animate-pulse px-8 py-6 h-full'>
        <div className='h-14 bg-slate-400 rounded'></div>
        <div className='flex flex-col lg:flex-row py-8 gap-8'>
          <div className='w-full lg:w-2/5 h-96 bg-slate-400 rounded'></div>
          <div className='w-full'>
            <div className='h-96 bg-slate-400 rounded'></div>
            <div className='hidden lg:block h-96 bg-slate-400 my-4 rounded'></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


