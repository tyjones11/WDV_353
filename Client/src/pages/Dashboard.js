import React, {useState} from 'react';
import ChartRadialBar from '../components/Charts/ChartRadialBar';
import ChartArea from '../components/Charts/ChartArea';
import ChartBar from '../components/Charts/ChartBar';


function Dashboard() {
  const [chartRadialBar] = useState([
    {chartHeader: 'Favorite Holiday'}
  ]);
  const [chartArea] = useState([
    {chartHeader: 'October Weather: Ohio'}
  ]);
  const [chartBar] = useState([
    {chartHeader: 'Interface Programming: Number of Assignments'}
  ]);

  return (
      <section style={styles.container}>
        <h1>DASHBOARD</h1>
        <p style={styles.main}>
          {chartArea.map((chartArea, id) => (
            <ChartArea
            key={id}
            id={id}
            chartArea={chartArea}
            />
          ))}
        </p>
        <p style={styles.main}>
          {chartBar.map((chartBar, id) => (
            <ChartBar
            key={id}
            id={id}
            chartBar={chartBar}
            />
          ))}
        </p>
        <p style={styles.main}>
          {chartRadialBar.map((chartRadialBar, id) => (
            <ChartRadialBar
            key={id}
            id={id}
            chartRadialBar={chartRadialBar}
            />
          ))}
        </p>
      </section>
  )
}

export default Dashboard;

const styles = {
  container: {
    background: 'white smoke',
    color: '',
    height: '175vh',
    marginTop: '2%',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
  }
}