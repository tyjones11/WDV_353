const { connect, postDirector, findDirector, findMovie, postMovie, disconnect } = require("./config");
const Director = require("../modules/Directors");
const Movie = require("../modules/Movies");
const { beforeAll, afterAll } = require('@jest/globals');

//jest 3 functions describe, test, expect
jest.mock("./config");

describe('Config Function Tests', () => {
    beforeAll(() => {
        connect();
    });

    test('As a user I want to save a new director to the database', async () => {
        const newDirector = new Director({
            name: 'Mike Leaf',
            age: '55',
            bornIn: 'Ohio',
        });
        const director = await postDirector(newDirector);
        expect(director.name).toEqual('Mike Leaf');
        expect(director.age).toEqual('55');
        expect(director.bornIn).toEqual('Ohio');
    });

    test('As a user I want to find a director in the database', async () => {
        const director = await findDirector({
            title: 'Mike Leaf',
            age: '55',
            bornIn: 'Ohio',
        });
        expect(director[0].name).toEqual('Mike Leaf');
        expect(director[0].age).toEqual('55');
        expect(director[0].bornIn).toEqual('Ohio');
    });

    test('As a user I want to save a new movie to the database', async () => {
        const newMovie = new Movie({
            title: 'Terminator',
            year: '1955',
            genre: 'Action',
            averageRating: '5',
            description: 'new movie description',
            director: 'Russo Brothers'
        });
        const movie = await postMovie(newMovie);
        expect(movie.title).toEqual('Terminator');
        expect(movie.year).toEqual('1955');
        expect(movie.genre).toEqual('Action');
        expect(movie.averageRating).toEqual('5');
        expect(movie.description).toEqual('new movie description');
        expect(movie.director).toEqual('Russo Brothers');
    });

    test('As a user I want to find a movie in the database', async () => {
        const movie = await findMovie({
            title: 'Terminator',
            year: '1955',
            genre: 'Action',
            averageRating: '5',
            description: 'new movie description',
            director: 'Russo Brothers'
        });
        expect(movie.title[0]).toEqual('Terminator');
        expect(movie.year[0]).toEqual('1955');
        expect(movie.genre[0]).toEqual('Action');
        expect(movie.averageRating[0]).toEqual('5');
        expect(movie.description[0]).toEqual('new movie description');
        expect(movie.director[0]).toEqual('Russo Brothers');
    });

    afterAll(() => {
        disconnect();
    });
})