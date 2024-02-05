import React from 'react'

const ButtonSmall = props => {
    return (
        <button onClick={props.onClick}
                style={styles.btnSmall} >
            {props.btnText}
        </button>
    )
}
export default ButtonSmall

const styles = {
    btnSmall: {
        fontWeight: 'bold',
        backgroundColor: 'rgb(221, 161, 94)',
        color: 'rgb(40, 54, 24)',
        padding: '1%',
        borderRadius: '50%',
        border: '2px solid rgb(221, 161, 94)',
        cursor: 'pointer',
        height: '50px',
        width: '50px'
    }
}