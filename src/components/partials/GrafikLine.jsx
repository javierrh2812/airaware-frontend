import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import _ from 'lodash';

export default function GrafikLine({ data_list }) {
  const options = {
    responsive: true,
    fill: true,
    backgroundColor: '#A1E3D8',
    borderColor: '#4B7BE5',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  let dataLabels = [];
  let dataSets = [];

  data_list.data.forEach((values, key) => {
    for (const [index, value] of Object.entries(values)) {
      dataLabels.push(index);
      dataSets.push(value.iaq);
    }
  });

  const data = {
    labels: _.reverse(dataLabels),
    datasets: [
      {
        label: 'IAQ',
        lineTension: 0.5,
        data: _.reverse(dataSets),
      },
    ],
  };

  return (
    <div className='px-4 py-2 text-slate-600 my-3 shadow-sm rounded border'>
      <h3 className='text-lg font-semibold pt-3 font-sora'>History</h3>
      <h4 className='text-base pb-4 font-medium text-slate-500 font-manrope'>
        Air quality history graph
      </h4>
      {data_list.data.length > 2 ? (
        <Line data={data} options={options} />
      ) : (
        <h4 className='text-center py-8 lg:py-24 text-lg lg:text-xl text-slate-700 italic font-manrope'>
          Sorry the data not enough for display in the chart.
        </h4>
      )}
    </div>
  );
}
