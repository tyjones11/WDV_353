import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav style={styles.myNav}>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/directors" style={styles.link}>Directors</Link>
            <Link to="/movies" style={styles.link}>Movies</Link>
        </nav>
    )

}
export default Nav

const styles={
    myNav: {
        height: '10%',
        background: 'gray',
        display: 'flex',
        flexDirection: 'column',
        width: '15%',
        margin: '1%',
        boxShadow: '15px 15px 19px black',
        borderRadius: '5px'
    },
    link: {
        background: 'rgb(40, 54, 24)',
        height: '15px',
        color: 'rgb(221, 161, 94)',
        padding: '7%',
        textAlign: 'center',
        cursor: 'pointer',
        border: '0.2px solid rgb(221, 161, 94)',
    }
}