import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import moment from 'moment-timezone';
import 'moment/locale/id';
import _ from 'lodash';
import { db } from '../../../../src/config/firebase';

export default async function handler(req, res) {
  const { deviceId, startDate, endDate } = req.query;
  let response = {
    message: 'the request has been processed successfully on the server',
    data: [],
  };

  // if the method is GET
  if (req.method === 'GET') {
    const deviceRef = doc(db, 'device', deviceId);
    // check if the query params is null
    if (
      (startDate != null && endDate == null) ||
      (startDate == null && endDate != null)
    ) {
      response.message =
        "the query params (startDate and endDate) both must be filled in, can't be empty";
      res.status(404).json(response);
    } else if (startDate == null && endDate == null) {
      // get only today data
      const docRef = collection(db, 'data_sensor');
      // make query
      const qLatest = query(
        docRef,
        where('device_id', '==', deviceRef),
        orderBy('created_at', 'desc'),
        limit(1)
      );
      const latestData = await getDocs(qLatest);
      // check is have a data or not
      if (latestData.empty) {
        // response for empty data sensors
        res.status(204).end();
      } else {
        let temp = [];
        latestData.forEach((d) => {
          temp.push({ ...d.data() });
        });

        /*
          get list data by latest data
        */
        // get data latest from yesterday
        const today = moment(temp[0].created_at.seconds * 1000)
          .startOf('days')
          .toDate();
        const yesterday = moment(today - 1)
          .startOf('day')
          .toDate();

        // make query data
        const q = query(
          docRef,
          where('device_id', '==', deviceRef),
          where('created_at', '>', yesterday),
          where('created_at', '<', today),
          orderBy('created_at', 'desc')
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          // response for empty data sensors
          res.status(204).end();
        } else {
          let dataList = [];
          querySnapshot.forEach((d) => {
            dataList.push({ ...d.data(), doc_id: d.id });
          });
          // grouping data by data sensors
          const data_result = _(dataList)
            .groupBy((d) => 'data_result')
            .mapValues((v) => _.map(v, 'data_result'))
            .value();

          // mean the data
          const results = {
            iaq: Math.ceil(_.meanBy(data_result['data_result'], (d) => d.iaq)),
            pressure: Math.ceil(
              _.meanBy(data_result['data_result'], (d) => d.pressure)
            ),
            temperature: Math.ceil(
              _.meanBy(data_result['data_result'], (d) => d.temperature)
            ),
            humidity: Math.ceil(
              _.meanBy(data_result['data_result'], (d) => d.humidity)
            ),
          };

          response.data.push(results);

          res.status(200).json(response);
        }
        // end of logic latest data
      }
      // end else if without startDate and endDate
    } else {
      const startAt = moment()
        .subtract(parseInt(startDate), 'day')
        .startOf('day')
        .toDate();
      const endAt = moment()
        .subtract(parseInt(endDate), 'day')
        .startOf('day')
        .toDate();

      const docRef = collection(db, 'data_sensor');
      // make query
      const q = query(
        docRef,
        where('device_id', '==', deviceRef),
        where('created_at', '>', endAt),
        where('created_at', '<', startAt),
        orderBy('created_at', 'desc')
      );

      const querySnapshot = await getDocs(q);
      // check is have a data or not
      if (querySnapshot.empty) {
        // response for empty data sensors
        res.status(204).end();
      } else {
        let dataListDate = [];

        querySnapshot.forEach((d) => {
          dataListDate.push({
            ...d.data(),
            doc_id: d.id,
            date_time: moment(d.data().created_at.seconds * 1000)
              .tz('Asia/Jakarta')
              .format('HH:mm:ss, MMM dddd Do YYYY'),
          });
        });

        // grouping data by date
        const results = _(dataListDate)
          .groupBy((d) =>
            moment(d.created_at.seconds * 1000).format('ddd, MMM Do')
          )
          .mapValues((v) => _.map(v, 'data_result'))
          .value();

        for (const [key, value] of Object.entries(results)) {
          response.data.push({
            [key]: {
              iaq: Math.ceil(_.meanBy(value, 'iaq')),
              pressure: Math.ceil(_.meanBy(value, 'pressure')),
              temperature: Math.ceil(_.meanBy(value, 'temperature')),
              humidity: Math.ceil(_.meanBy(value, 'humidity')),
            },
          });
        }

        res.status(200).json(response);
      }
      // end else logic
    }
  } else {
    response.message = 'we only accept GET method.';
    res.status(405).json(response);
  }
}
