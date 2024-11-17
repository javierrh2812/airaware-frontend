import { Hero, Purpose, Feature } from '../src/components/';
import Layout from '../src/components/Layout';

export default function Home() {
  return (
    <Layout title={'Overview | AirAware'}>
      <Hero />
      <Purpose />
      <Feature />
    </Layout>
  );
}
