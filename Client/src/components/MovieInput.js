import React from 'react';

const MovieInput = props => {
    return (
        <input
        style={styles.Input}
            id={props.id}
            type={props.inputType}
            title={props.title}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default MovieInput;

const styles={
    Input: {
        padding: '2%',
        paddingRight: '70%',
        margin: '1%'
    }
}