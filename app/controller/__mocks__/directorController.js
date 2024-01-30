const getAllDirectors = async () => {
    console.log('Mocked Directors');
    return Promise.resolve({
        data: [{
            name: 'Joss Whedon',
            age: 59,
            bornIn: 'New York',
            id: 1,
        },
        {
            name: 'James DeMonaco',
            age: 54,
            bornIn: 'New York',
            id: 2,
        },
        {
            name: 'Takashi Yamozaki',
            age: 59,
            bornIn: 'Japan',
            id: 3,
        },
        {
            name: 'James Cameron',
            age: 69,
            bornIn: 'Canada',
            id: 4,
        },
        {
            name: 'Russo Brothers',
            age: 53,
            bornIn: 'Ohio',
            id: 5,
        },
        {
            name: 'Nick Cassavetes',
            age: 64,
            bornIn: 'New York',
            id: 6,
        },]
    })
};
    
const getDirectorById = async () => {
    console.log('Mocked Directors by Id');
    return Promise.resolve({data:
        {name: 'Nick Cassavetes', age: 64, bornIn: 'New York', id: 6},
    });
};


module.exports = {
    getAllDirectors,
    getDirectorById,
};