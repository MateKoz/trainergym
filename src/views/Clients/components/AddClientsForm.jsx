import React, {useState} from 'react';
import {Clients as dataClients} from "../data/Clients";


const AddClientsForm = () => {
    const [data, setData] = useState([...dataClients]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            age: e.target.age.value,
            startIn: e.target.startIn.value,
            target: e.target.target.value,
            diet: e.target.diet.value,
            supplementation: e.target.supplementation.value,
        };
        console.log(newData)
        setData([...data, newData]);
    };
    console.log(data)
    console.log(dataClients)

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Imię:</label>
            <input type="text" id="name" name='name'/>
            <br/>
            <label htmlFor="surname">Nazwisko:</label>
            <input type="text" id="surname" name='surname'/>
            <br/>
            <label htmlFor="age">Wiek:</label>
            <input type="text" id="age"/>
            <br/>
            <label htmlFor="startIn">Data rozpoczęcia:</label>
            <input type="date" id="startIn"/>
            <br/>
            <label htmlFor="target">Cel:</label>
            <select id="target">
                <option value="reduceWeight">Zmniejszenie wagi</option>
                <option value="increaseMuscleMass">Zwiększenie masy mięśniowej</option>
                <option value="improveEndurance">Poprawa wytrzymałości</option>
            </select>
            <br/>
            <label htmlFor="diet">Dieta:</label>
            <select id="diet">
                <option value="lowCarb">Niskowęglowodanowa</option>
                <option value="highProtein">Wysokobiałkowa</option>
                <option value="balanced">Zbilansowana</option>
            </select>
            <br/>
            <label htmlFor="supplementation">Suplementacja:</label>
            <select id="supplementation">
                <option value="yes">Tak</option>
                <option value="no">Nie</option>
            </select>
            <br/>
                <button type="submit">Dodaj</button>
        </form>
    );
};


export default AddClientsForm;
