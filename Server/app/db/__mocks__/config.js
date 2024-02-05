const connect = () => {
        console.log('Mocked Connected To DB');
};

const postDirector = async (newDirector) => {
    console.log('Mocked Director');
    return Promise.resolve({
        name: 'Mike Leaf',
        age: '55',
        bornIn: 'Ohio',
    });
};

const findDirector = async (object) => {
    console.log('Find Mocked Director');
    return Promise.resolve([
        {
            name: 'Mike Leaf',
            age: '55',
            bornIn: 'Ohio',
        },
    ]);
};

const postMovie = async (newMovie) => {
    console.log('Mocked Movie');
    return Promise.resolve({
        title: 'Terminator',
        year: '1955',
        genre: 'Action',
        averageRating: '5',
        description: 'new movie description',
        director: 'Russo Brothers'
    });
};

const findMovie = async (object) => {
    console.log('Find Mocked Movie');
    return Promise.resolve([
        {
            title: 'Terminator',
            year: '1955',
            genre: 'Action',
            averageRating: '5',
            description: 'new movie description',
            director: 'Russo Brothers'
        },
    ]);
};

const disconnect = () => {
    console.log('Mocked Disconnecting');
};

module.exports = connect, postDirector, findDirector, postMovie, findMovie, disconnect;