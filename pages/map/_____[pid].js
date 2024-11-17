import _ from 'lodash';
import Layout from '../../src/components/Layout';
import { MapDetailSkeleton } from '../../src/components';
import { BannerHead, Card, GrafikLine } from '../../src/components/partials';
import moment from 'moment';

export default function DetailDevice({
  data_sensor,
  device,
  data_yesterday,
  data_list,
}) {
  if (!data_sensor && !device) return <MapDetailSkeleton />;
  return (
    <Layout title={'Detail Device | AirVision'}>
      <div className='px-8 py-6'>
        <h2 className='text-3xl font-semibold pt-4 font-sora'>
          Air quality in {_.capitalize(device.device_location_name)}
        </h2>
        <p className='pb-4 text-sm'>
          <span className='font-medium font-manrope'>
            Last update at :{' '}
            {moment(data_sensor.created_at.seconds * 1000).format(
              'hh:mm a, MMMM dddd Do YYYY'
            )}
          </span>
        </p>
        <div className='flex flex-col lg:flex-row'>
          <Card />
          <div>
            <BannerHead
              data_sensor={data_sensor}
              data_yesterday={data_yesterday}
            />
            <GrafikLine data_list={data_list} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const [data_sensorRes, deviceRes, data_yesterdayRes, data_listRes] =
    await Promise.all([
      fetch(`api/data-sensor/single/${params.pid}`),
      fetch(`api/device/${params.pid}`),
      fetch(`api/data-sensor/list/${params.pid}`),
      fetch( `api/data-sensor/list/${params.pid}?startDate=0&endDate=7`
      ),
    ]);

  const condition = [
    data_sensorRes.status,
    deviceRes.status,
    data_yesterdayRes.status,
    data_listRes.status,
  ];

  // if logic router force to null
  if (
    condition[0] == 204 &&
    condition[1] == 200 &&
    condition[2] == 204 &&
    condition[3] == 204
  ) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  } else if (
    condition[0] == 204 &&
    condition[1] == 204 &&
    condition[2] == 204 &&
    condition[3] == 204
  ) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  // logic if success
  if (
    condition[0] == 200 &&
    condition[1] == 200 &&
    condition[2] == 200 &&
    condition[3] == 200
  ) {
    // check if all status code 200
    // do something
    const [
      data_sensorResult,
      deviceResult,
      data_yesterdayResult,
      data_listResult,
    ] = await Promise.all([
      data_sensorRes.json(),
      deviceRes.json(),
      data_yesterdayRes.json(),
      data_listRes.json(),
    ]);

    // destructur
    const [data_sensor, device, data_yesterday, data_list] = [
      data_sensorResult.data[0],
      deviceResult.data[0],
      data_yesterdayResult.data[0],
      data_listResult,
    ];

    //  return the props to pages
    return {
      props: {
        data_sensor,
        device,
        data_yesterday,
        data_list,
      },
      revalidate: 30, // In seconds
    };
  } else if (
    // data yesterday null
    condition[0] == 200 &&
    condition[1] == 200 &&
    condition[2] == 204 &&
    condition[3] == 200
  ) {
    // do something
    const [data_sensorResult, deviceResult, data_listResult] =
      await Promise.all([
        data_sensorRes.json(),
        deviceRes.json(),
        data_listRes.json(),
      ]);

    // destructur
    const [data_sensor, device, data_list] = [
      data_sensorResult.data[0],
      deviceResult.data[0],
      data_listResult,
    ];
    const data_yesterday = [];

    //  return the props to pages
    return {
      props: {
        data_sensor,
        device,
        data_yesterday,
        data_list,
      },
      revalidate: 30, // In seconds
    };
  } else if (
    // data list null
    condition[0] == 200 &&
    condition[1] == 200 &&
    condition[2] == 200 &&
    condition[3] == 204
  ) {
    // do something
    const [data_sensorResult, deviceResult, data_yesterdayResult] =
      await Promise.all([
        data_sensorRes.json(),
        deviceRes.json(),
        data_yesterdayRes.json(),
      ]);

    // destructur
    const [data_sensor, device, data_yesterday] = [
      data_sensorResult.data[0],
      deviceResult.data[0],
      data_yesterdayResult.data[0],
    ];
    const data_list = {
      data: [],
    };
    //  return the props to pages
    return {
      props: {
        data_sensor,
        device,
        data_yesterday,
        data_list,
      },
      revalidate: 30, // In seconds
    };
  } else {
    // do something
    const [data_sensorResult, deviceResult] = await Promise.all([
      data_sensorRes.json(),
      deviceRes.json(),
    ]);

    // destructur
    const [data_sensor, device] = [
      data_sensorResult.data[0],
      deviceResult.data[0],
    ];
    const data_yesterday = [];
    const data_list = {
      data: [],
    };

    //  return the props to pages
    return {
      props: {
        data_sensor,
        device,
        data_yesterday,
        data_list,
      },
      revalidate: 30, // In seconds
    };
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.HOST_NAME}/api/device`);

  if (res.status == 200) {
    const results = await res.json();
    const devices = results.data;

    const paths = devices.map((device) => {
      return {
        params: {
          pid: device.id,
        },
      };
    });

    return {
      paths,
      fallback: true,
    };
  }
}
