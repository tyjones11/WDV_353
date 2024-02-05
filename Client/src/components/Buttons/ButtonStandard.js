import React from 'react'

const ButtonStandard = props => {
    return (
        <button onClick={props.onClick} 
                style={styles.btnStandard}>
            {props.btnText}
            <span>{props.btnIcon}</span>
        </button>
    )
}
export default ButtonStandard

const styles = {
    btnStandard: {
        fontWeight: 'bold',
        backgroundColor: 'black',
        color: 'rgb(221, 161, 94)',
        padding: '1%',
        margin: '1%',
        borderRadius: '10%',
        border: '2px solid rgb(221, 161, 94)',
        cursor: 'pointer'
    }
}