import React from 'react'
import ButtonStandard from '../Buttons/ButtonStandard'
import DirectorInput from '../DirectorInput';


const DirectorsForms = props => {
    return (
        <form
            style={styles.DirectorsForms}
            onSubmit={props.addDirector}>
            <div style={styles.inputContainer}>
                <label>First and Last Name</label>
                <DirectorInput
                    id="name"
                    type="text"
                    placeholder="Directors Name"
                    value={props.name}
                    name="name"
                    onChange={props.nameInput}/>
                <label>Director's Age</label>
                <DirectorInput
                    id="age"
                    type="number"
                    placeholder="Directors Age"
                    value={props.age}
                    name="age"
                    onChange={props.ageInput}/>
                <label>Where was the director born?</label>
                <DirectorInput
                    id="bornIn"
                    type="text"
                    placeholder="Where was the director born?"
                    value={props.bornIn}
                    name="bornIn"
                    onChange={props.bornInInput}/>
            </div>
            <div style={styles.publish}>
                <ButtonStandard btnText="Add Director"/>
            </div>
        </form>
    )
};

export default DirectorsForms;

const styles={
    DirectorsForms: {
        display: 'flex',
        flexDirection: 'column',
        width: '600px',
        padding: '1%',
        backgroundColor: 'lightgray',
        color: 'black',
        justifyContent: 'space-between',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '5%'
        },
    input: {
        padding: '2%',
        paddingRight: '70%',
        margin: '1%'
    },
    inputDescription: {
        paddingBottom: '10%',
        paddingRight: '71%',
        margin: '1%'
    },
    publish: {
        margin: '1%'
    }
}