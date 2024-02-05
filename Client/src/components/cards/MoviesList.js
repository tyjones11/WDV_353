import React from 'react'

const MoviesList = ({movies, _id}) => {
    return (
        <>
            {movies.map(movie => (
                <article key={movie._id} style={styles.card}>
                    <p>Title: {movie.title}</p>
                    <p>Year: {movie.year}</p>
                    <p>Genre: {movie.genre}</p>
                    <p>Average Rating: {movie.averageRating}</p>
                    <p>Description: {movie.description}</p>
                    <p>Director: {movie.director}</p>
                </article>
            ))}
        </>
    )        
}

export default MoviesList;

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