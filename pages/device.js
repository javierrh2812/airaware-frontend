import Layout from "../src/components/Layout";
import { ListView } from "../src/components/partials";

export default function device({ devices }) {
  return (
    <Layout title={"Device | AirAware"}>
      <div className="h-fit lg:h-screen">
        <ListView listItem={devices} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  //const res = await fetch(`${process.env.HOST_NAME}/api/device`);

  // if (res.status == 200) {
  //   const results = await res.json();
  //   const devices = results.data;
  const devices = [
    {device_name: 'device1', device_location_name: 'lima Ev. 1', status: true},
    {device_name: 'device2', device_location_name: 'lima Ev. 2', status: true},
    {device_name: 'device3', device_location_name: 'lima Ev. 3', status: true},
    {device_name: 'device4', device_location_name: 'lima - 1', status: false},
    {device_name: 'device5', device_location_name: 'lima - 2', status: false},
    {device_name: 'device6', device_location_name: 'lima - 3', status: false},
  ];

  return {
    props: {
      devices,
    },
    revalidate: 60, // In seconds
  };
  //}
}
