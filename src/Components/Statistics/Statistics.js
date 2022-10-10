import React from 'react';
import './Statistics.css';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const data = [
  {
    id: 1,
    logo: 'https://live.staticflickr.com/65535/52413593240_e00326e727_o.png',
    name: 'React',
    total: 8,
  },
  {
    id: 2,
    logo: 'https://live.staticflickr.com/65535/52412638962_12e932256a_o.png',
    name: 'JavaScript',
    total: 9,
  },
  {
    id: 4,
    logo: 'https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png',
    name: 'CSS',
    total: 8,
  },
  {
    id: 5,
    logo: 'https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png',
    name: 'Git',
    total: 11,
  },
];

const Statistics = () => {
  const quizTopics = useLoaderData()?.data;
  console.log(quizTopics);

  return (
    <div className="chart-container">
      <h1>Total Question No</h1>
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart width={430} height={200} data={data}>
            <XAxis dataKey="name" />
            <Tooltip />

            <Bar dataKey="total" fill="hsl(10, 79%, 65%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
