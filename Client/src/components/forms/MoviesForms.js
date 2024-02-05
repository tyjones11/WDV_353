import React from 'react'
import ButtonStandard from '../Buttons/ButtonStandard'
import MovieInput from '../MovieInput';


const MoviesForms = props => {
    return (
        <form
            style={styles.MoviesForms}
            onSubmit={props.addMovie}>
            <div style={styles.inputContainer}>
                <label>Title</label>
                <MovieInput
                    id="title"
                    type="text"
                    placeholder="Movie Title"
                    value={props.title}
                    name="title"
                    onChange={props.titleInput}/>
                <label>Year</label>
                <MovieInput
                    id="year"
                    type="number"
                    placeholder="Year"
                    value={props.year}
                    name="uear"
                    onChange={props.yearInput}/>
                <label>Genre</label>
                <MovieInput
                    id="genre"
                    type="text"
                    placeholder="Genre"
                    value={props.genre}
                    name="genre"
                    onChange={props.genreInput}/>
                <label>Average Rating</label>
                <MovieInput
                    id="averageRating"
                    type="number"
                    placeholder="averageRating"
                    value={props.averageRating}
                    name="averageRating"
                    onChange={props.averageRatingInput}/>
                <label>Description</label>
                <MovieInput
                    id="description"
                    type="text"
                    placeholder="description"
                    value={props.description}
                    name="description"
                    onChange={props.descriptionInput}/>
                <label>Director</label>
                <MovieInput
                    id="director"
                    type="text"
                    placeholder="director"
                    value={props.director}
                    name="genre"
                    onChange={props.directorInput}/>
            </div>
            <div style={styles.publish}>
                <ButtonStandard btnText="Add Movie"/>
            </div>
        </form>
    )
};

export default MoviesForms;

const styles={
    MoviesForms: {
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