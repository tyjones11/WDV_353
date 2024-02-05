import axios from 'axios';

export const getDirector = async() => {
    console.log('Real Get');
    return await axios.get('http://localhost:3000/directors')
};

export const saveDirector = async (name, age, bornIn) => {
    console.log('Real Post - Save');
    return await axios.post('http://localhost:3000/directors/', {
        name: name,
        age: age,
        bornIn: bornIn
    });
};

export const editDirector = async (name, age, bornIn) => {
    console.log('Real Edit');
    return await axios.put('http://localhost:3000/directors/', {
        name: name,
        age: age,
        bornIn: bornIn
    });
};

export const deleteDirector = async (name, age, bornIn) => {
    console.log('Real Delete');
    return await axios.delete('http://localhost:3000/directors/', {
        name: name,
        age: age,
        bornIn: bornIn
    });
};

