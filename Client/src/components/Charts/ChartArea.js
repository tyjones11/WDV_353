import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
  {name: '1',
    high: 83,
    low: 57,},
  {name: '2',
    high: 86,
    low: 59,},
  {name: '3',
    high: 87,
    low: 59,},
  {name: '4',
    high: 87,
    low: 59,},
  {name: '5',
    high: 79,
    low: 63,},
  {name: '6',
    high: 75,
    low: 51,},
  {name: '7',
    high: 61,
    low: 43,},
  {name: '8',
    high: 54,
    low: 43,},
  {name: '9',
    high: 62,
    low: 46,},
  {name: '10',
    high: 65,
    low: 41,},
  {name: '11',
    high: 70,
    low: 47,},
  {name: '12',
    high: 77,
    low: 50,},
  {name: '13',
    high: 76,
    low: 62,},
  {name: '14',
    high: 66,
    low: 49,}
];

const ChartArea = ({chartArea}) => {
  return (
    <article key={chartArea.id} style={styles.card}>
      <h1 style={styles.h1}>{chartArea.chartHeader}</h1>
        <AreaChart
        width={600}
        height={100}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="high" stroke="rgb(221, 161, 94)" fill="rgb(221, 161, 94)" />
        <Area type="monotone" dataKey="low" stroke="rgb(40, 54, 24)" fill="rgb(40, 54, 24)" />
        </AreaChart>
    </article>
  );
}

export default ChartArea;

const styles ={
  card: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '15px 15px 19px black',
    transition: '0.3s',
    minHeight: '50%',
    width: '100%',
    backgroundColor: 'white',
    margin: '2%',
    paddingLeft: '2%',
    paddingRight: '2%',
    textAlign: 'center'
  },
  h1: {
    borderBottom: '1px solid #474044'
  }
}