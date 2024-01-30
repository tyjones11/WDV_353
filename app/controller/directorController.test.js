const { getAllDirectors, getDirectorById } = require('./directorController');

//jest.mock('./directorController');

describe('directorController Test', () => {
    test('Return 6 Directors', async () => {
        const result = await getAllDirectors();
        expect(result.data).toHaveLength(6)
        expect(result.data[3].id).toEqual(4);
        expect(result.data[3].name).toEqual("James Cameron");
        expect(result.data[3].age).toEqual(69);
        expect(result.data[3].bornIn).toEqual("Canada");
    });

    test('Return a director by Id', async () => {
        const result = await getDirectorById(6);
        console.log('result', result.data);
        expect(result.data.name).toEqual("Nick Cassavetes");
        expect(result.data.age).toEqual(64);
        expect(result.data.bornIn).toEqual("New York");
        expect(result.data.id).toEqual(6);
    })
});