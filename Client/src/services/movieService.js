import axios from 'axios';
import Movies from '../pages/Movies';

export const getMovie = async() => {
    console.log('Real Get');
    return await axios.get('http://localhost:3000/movies')
};

export const saveMovie = async (title, year, genre, averageRating, description, director) => {
    console.log('Real Post - Save');
    return await axios.post('http://localhost:3000/movies/', {
        title: title,
        year: year,
        genre: genre,
        averageRating: averageRating,
        description: description,
        director: director
    });
};

export const editMovie = async (title, year, genre, averageRating, description, director) => {
    console.log('Real Edit');
    return await axios.put('http://localhost:3000/movies/', {
        title: title,
        year: year,
        genre: genre,
        averageRating: averageRating,
        description: description,
        director: director
    });
};

export const deleteMovie = async (title, year, genre, averageRating, description, director) => {
    console.log('Real Delete');
    return await axios.delete('http://localhost:3000/movies/', {
        title: title,
        year: year,
        genre: genre,
        averageRating: averageRating,
        description: description,
        director: director
    });
};

