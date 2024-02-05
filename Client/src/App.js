import {Routes, Route} from "react-router-dom"
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Directors from './pages/Directors';
import Movies from './pages/Movies';

function App() {
  return (
    <div>
      <main style={styles.container}>
        <Nav style={styles.nav}/>
        <section style={styles.section}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="directors" element={<Directors />} />
            <Route path="movies" element={<Movies />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}


export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: 'rgb(254, 250, 224)',
    color: '',
    height: '175vh',
  },
nav: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
},
main: {
  display: 'flex',
  flexDirection: 'column',
  flex: 3,
  alignItems: 'center',
},
ads: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingLeft: 20,
  paddingRight: 60,
},
section: {
  paddingLeft: '5%'
}
}