import React from 'react';

const DirectorInput = props => {
    return (
        <input
        style={styles.Input}
            id={props.id}
            type={props.inputType}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default DirectorInput;

const styles={
    Input: {
        padding: '2%',
        paddingRight: '70%',
        margin: '1%'
    }
}