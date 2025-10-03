import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const ResultChart = ({ correct, incorrect }) => {
  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [correct, incorrect],
        backgroundColor: ['#22c55e', '#ef4444'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{ width: 260, height: 260 }}
      className="mx-auto my-8 max-w-xs bg-white/90 rounded-2xl shadow-2xl border border-indigo-100 p-8 flex items-center justify-center"
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default ResultChart;
