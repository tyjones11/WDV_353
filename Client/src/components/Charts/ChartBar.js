import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {
    name: "WDDBS",
    due: 5,
    completed: 5,
  },
  {
    name: "Module 1",
    due: 4,
    completed: 4,
  },
  {
    name: "Module 2",
    due: 3,
    completed: 3,
  },
  {
    name: "Module 3",
    due: 4,
    completed: 3,
  },
  {
    name: "Module 4",
    due: 3,
    completed: 0,
  }
];

const ChartBar = ({chartBar}) => {
  return (
    <article key={chartBar.id} style={styles.card}>
    <h1 style={styles.h1}>{chartBar.chartHeader}</h1>
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="due" fill="rgb(40, 54, 24)" />
      <Bar dataKey="completed" fill="rgb(221, 161, 94)" />
      </BarChart>
    </article>
  );
  }
  
export default ChartBar;

const styles ={
  card: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '15px 15px 19px black',
    transition: '0.3s',
    height: '80%',
    width: '80%',
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