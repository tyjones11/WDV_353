const { getAllMovies, getMovieById }= require('./movieController');

jest.mock('./movieController');

describe('movieController Test', () => {
    test('Return 12 Movies', async () => {
        const result = await getAllMovies();
        expect(result.data).toHaveLength(11)
        expect(result.data[6].id).toEqual(8);
        expect(result.data[6].title).toEqual("The Avengers");
        expect(result.data[6].year).toEqual(2012);
        expect(result.data[6].genre).toEqual("Action");
        expect(result.data[6].averageRating).toEqual(5);
        expect(result.data[6].director).toEqual("Joss Whedon");
    });

    test('Return a movie by Id', async () => {
        const result = await getMovieById(10);
        console.log('result', result.data);
        expect(result.data.id).toEqual(10);
        expect(result.data.title).toEqual("The Purge: Election Year");
        expect(result.data.year).toEqual(2016);
        expect(result.data.genre).toEqual("Horror");
        expect(result.data.averageRating).toEqual(3);
        expect(result.data.director).toEqual("James DeMonaco");
    })
});