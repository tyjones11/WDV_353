const getAllMovies = async () => {
    console.log('Mocked Movies');
    return Promise.resolve({
        data: [{
            id: 1,
            title: "Avengers: End Game",
            year: 2019,
            genre: "Action",
            averageRating: 5,
            director: "Russo Brothers"
        },
        {
            id: 2,
            title: "Avengers: Infinity War",
            year: 2018,
            genre: "Action",
            averageRating: 5,
            director: "Russo Brothers"
        },
        {
            id: 3,
            title: "Captain America: Civil War",
            year: 2016,
            genre: "Action",
            averageRating: 4,
            director: "Russo Brothers"
        },
        {
            id: 5,
            title: "The Notebook",
            year: 2004,
            genre: "Romance",
            averageRating: 4,
            director: "Nick Cassavetes"
        },
        {
            id: 6,
            title: "Avatar",
            year: 2009,
            genre: "Action",
            averageRating: 4,
            director: "James Cameron"
        },
        {
            id: 7,
            title: "Titanic",
            year: 1997,
            genre: "Romance",
            averageRating: 4,
            director: "James Cameron"
        },
        {
            id: 8,
            title: "The Avengers",
            year: 2012,
            genre: "Action",
            averageRating: 5,
            director: "Joss Whedon"
        },
        {
            id: 9,
            title: "Godzilla",
            year: 2014,
            genre: "Action",
            averageRating: 3,
            director: "Takashi yamazaki"
        },
        {
            id: 10,
            title: "The Purge: Election Year",
            year: 2016,
            genre: "Horror",
            averageRating: 3,
            director: "James DeMonaco"
        },
        {
            id: 11,
            title: "The Purge: Anarchy",
            year: 2014,
            genre: "Horror",
            averageRating: 3,
            director: "James DeMonaco"
        },
        {
            id: 12,
            title: "The Purge",
            year: 2013,
            genre: "Horror",
            averageRating: 3,
            director: "James DeMonaco"
        },
    ]
    })
};
    
const getMovieById = async () => {
    console.log('Mocked Movie by Id');
    return Promise.resolve({data:
        {id: 10, title: 'The Purge: Election Year', year: 2016, genre: 'Horror', averageRating: 3, director: 'James DeMonaco'},
    });
};

module.exports = {
    getAllMovies,
    getMovieById,
};