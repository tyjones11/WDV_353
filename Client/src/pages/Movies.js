import React, {useEffect, useState} from 'react';
import { saveMovie, getMovie} from '../services/movieService';
import MoviesList from "../components/cards/MoviesList";
import MoviesForm from "../components/forms/MoviesForms";

//Parent/Smart Hooks Component: Movies
function Movies() {
    const [title, settitle] = useState('');
    const [year, setyear] = useState('');
    const [genre, setgenre] = useState('');
    const [averageRating, setaverageRating] = useState('');
    const [description, setdescription] = useState('');
    const [director, setdirector] = useState('');
    const [resp, setResp] = useState('');
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovie()
        .then(result => {
            setMovie(result.data.result)
        })
        .catch(err => {
            console.log(err.message);
        });
    }, [setMovie, movie]);


    const titleInput = e => {
        console.log(e.target.value);
        settitle(e.target.value);
    }

    const yearInput = e => {
        console.log(e.target.value);
        setyear(e.target.value);
    }

    const genreInput = e => {
        console.log(e.target.value);
        setgenre(e.target.value);
    }

    const averageRatingInput = e => {
        console.log(e.target.value);
        setaverageRating(e.target.value);
    }

    const descriptionInput = e => {
        console.log(e.target.value);
        setdescription(e.target.value);
    }

    const directorInput = e => {
        console.log(e.target.value);
        setdirector(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        saveMovie(title, year, genre, averageRating, description, director)
            .then(result => {
                settitle('');
                setyear('');
                setgenre('');
                setaverageRating('');
                setdescription('');
                setdirector('');
                setResp(result.data.message);
                setMovie(result.data.result);
            })
            .catch(err => {
                console.log('Error: ', err.message);
                setResp('Error: ', err.message);
            })
            console.log(addMovie)
    };

    return(
        <section style={styles.container}>
            <h1>Movie</h1>
            <MoviesForm
                addMovie={addMovie}
                titleInput={titleInput}
                yearInput={yearInput}
                genreInput={genreInput}
                averageRatingInput={averageRatingInput}
                descriptionInput={descriptionInput}
                directorInput={directorInput}
            />

            <MoviesList
                movies={movie}
            />
        </section>
    );

}

export default Movies;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        paddingLeft: '2%'
    }
};