import React, {useEffect, useState} from 'react';
import { saveDirector, getDirector} from '../services/directorService';
import DirectorsList from "../components/cards/DirectorsList";
import DirectorsForm from "../components/forms/DirectorsForms";

//Parent/Smart Hooks Component: Director
function Directors() {
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [bornIn, setbornIn] = useState('');
    const [resp, setResp] = useState('');
    const [director, setDirector] = useState([]);

    useEffect(() => {
        getDirector()
        .then(result => {
            setDirector(result.data.result)
        })
        .catch(err => {
            console.log(err.message);
        });
    }, [setDirector, director]);


    const nameInput = e => {
        console.log(e.target.value);
        setname(e.target.value);
    }

    const ageInput = e => {
        console.log(e.target.value);
        setage(e.target.value);
    }

    const bornInInput = e => {
        console.log(e.target.value);
        setbornIn(e.target.value);
    }

    const addDirector = e => {
        e.preventDefault();
        saveDirector(name, age, bornIn)
            .then(result => {
                setname('');
                setage('');
                setbornIn('');
                setResp(result.data.message);
                setDirector(result.data.result);
            })
            .catch(err => {
                console.log('Error: ', err.message);
                setResp('Error: ', err.message);
            })
            console.log(addDirector)
    };

    return(
        <section style={styles.container}>
            <h1>Director</h1>
            <DirectorsForm
                addDirector={addDirector}
                nameInput={nameInput}
                ageInput={ageInput}
                bornInInput={bornInInput}
            />

            <DirectorsList
                directors={director}
            />
        </section>
    );

}

export default Directors;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        paddingLeft: '2%'
    }
};