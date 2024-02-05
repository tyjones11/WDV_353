import React from 'react'

const DirectorsList = ({directors, _id}) => {
    return (
        <>
            {directors.map(director => (
                <article key={director._id} style={styles.card}>
                    <p>Name: {director.name}</p>
                    <p>Age: {director.age}</p>
                    <p>Born In: {director.bornIn}</p>
                </article>
            ))}
        </>
    )        
}

export default DirectorsList;

const styles={
    card: {
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
        }
}