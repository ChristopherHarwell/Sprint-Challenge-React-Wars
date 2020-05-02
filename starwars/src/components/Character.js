import React, {useState, useEffect} from 'react';
import {Card, CardTitle, CardImg, CardText} from 'reactstrap';
import axios from 'axios';

// Write your Character component here

const Character = () => {

    const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
            setCharacter(res.data.results);  
        })
    .catch(err => console.error('an error occurred between '
    + 'lines 10 and 12 of Character.js',err));
    })


    const mapItem = character.map(item => {
        return (
            <div>
                <Card body className="card">
                    <CardTitle className='card-title'>{item.name}</CardTitle>
                    <CardImg className='img-border' src={item.image}></CardImg>
                    <CardText className='text-divider'>Status: {item.status}</CardText>
                    <CardText className='text-divider'>Origin: {item.origin.name}</CardText>
                    <CardText className='text-divider'>Species: {item.species}</CardText>
                    <CardText className='text-divider'>Location: {item.location.name}</CardText>
                    <CardText>Gender: {item.gender}</CardText>
                </Card>

            </div>
        )
    })
    return(
        <div>{mapItem}</div>
    )
}

export default Character;