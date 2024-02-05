import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  {
    name: "Christmas",
    uv: 500,
    fill: "rgb(221, 161, 94)"
  },
  {
    name: "Thanksgiving",
    uv: 384,
    fill: "rgb(188, 108, 37)"
  },
  {
    name: "Halloween",
    uv: 700,
    fill: "rgb(96, 108, 56)"
  },
  {
    name: "4th of July",
    uv: 297,
    fill: "rgb(188, 108, 37)"
  },
  {
    name: "St. Patricks Day",
    uv: 492,
    fill: "rgb(96, 108, 56)"
  },
  {
    name: "Valentine's Day",
    uv: 100,
    fill: "rgb(221, 161, 94)"
  },
  {
    name: "New Years",
    uv: 158,
    fill: "rgb(188, 108, 37)"
  }
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

const ChartRadialBar = ({chartRadialBar}) => {
  return (
    <article key={chartRadialBar.id} style={styles.card}>
    <h1 style={styles.h1}>{chartRadialBar.chartHeader}</h1>
      <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
      minAngle={15}
      label={{ position: "insideStart", fill: "#fff" }}
      background
      clockWise
      dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
    </article>
  );
}

export default ChartRadialBar;

const styles ={
  card: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '15px 15px 19px black',
    transition: '0.3s',
    minHeight: '20%',
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