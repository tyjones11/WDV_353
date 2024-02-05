import React from 'react'

const MyBtn = props => {
    return (
        <button onClick={props.onClick}
                style={styles.btn} >
            {props.btnText}
        </button>
    )
}
export default MyBtn

const styles = {
    btn: {
        fontWeight: 'bold',
        backgroundColor: 'rgb(221, 161, 94)',
        color: 'rgb(40, 54, 24)',
        padding: '1%',
        margin: '1%',
        borderRadius: '10%',
        border: 'none',
        cursor: 'pointer'
    }
}