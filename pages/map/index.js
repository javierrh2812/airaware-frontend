import dynamic from "next/dynamic";

const mockedData = [
  {
    geometry: { coordinates: [-77.02824, -12.04318] },
    properties: {
      condition: "unhealthy",
      location: "Lima",
      data_result: {
        iaq: "120",
        pressure: "1000",
        temperature: "23",
        humidity: "50",
      },
      created_at: { seconds: '-1'}
    },
  },
  {
    geometry: { coordinates: [-77.02624, -12.04318] },
    properties: {
      condition: "unhealthy",
      location: "Lima",
      data_result: {
        iaq: "120",
        pressure: "1000",
        temperature: "23",
        humidity: "50",
      },
      created_at: { seconds: '0'}
    },
  },
  {
    geometry: { coordinates: [-77.02844, -12.04418] },
    properties: {
      condition: "moderate",
      location: "Lima",
      data_result: {
        iaq: "120",
        pressure: "1000",
        temperature: "23",
        humidity: "50",
      },
      created_at: { seconds: '0'}
    },

  },
];
function map({ geoData }) {
  const Map = dynamic(
    () => import("../../src/components/Maps"), //  '@components/map' location
    { ssr: false }
  );
  return <Map geoData={geoData} />;
}

export default map;

// fetch data with staticProps
export async function getStaticProps() {
  //const res = await fetch(`api/geojson`);
  const res = mockedData;

  return {
    props: {
      geoData: res,
    },
    revalidate: 60, // In seconds
  };
}
