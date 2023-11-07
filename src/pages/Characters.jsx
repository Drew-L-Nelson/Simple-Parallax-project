import React, { useState } from 'react';
import '../styles/Characters.css';

//rebuild this in Firebase after testing
const characters = [
        {
            id: 1,
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            eye_color: "blue",
            gender: "male",
            backstory: "Raised on the desert planet of Tatooine, Luke Skywalker rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. After discovering his parentage, he played a pivotal role in the defeat of the Galactic Empire."
        },
        {
            id: 2,
            name: "Darth Vader",
            height: "202",
            mass: "136",
            eye_color: "yellow",
            gender: "male",
            backstory: "Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led the Empire's eradication of the Jedi Order. He is the father of Luke Skywalker and Leia Organa."
        },
        {
            id: 3,
            name: "Leia Organa",
            height: "150",
            mass: "49",
            eye_color: "brown",
            gender: "female",
            backstory: "Leia Organa, a Princess of Alderaan, was a prominent figure in the Rebel Alliance and an instrumental figure in the overthrow of the Galactic Empire. She is known for her strong leadership, sharp wit, and enduring hope that good will prevail."
        },
        {
            id: 4,
            name: "Anakin Skywalker",
            height: "188",
            mass: "84",
            eye_color: "blue",
            gender: "male",
            backstory: "Anakin Skywalker was once a courageous and gifted Jedi Knight before turning to the dark side and becoming Darth Vader. His exceptional piloting skills and strong connection to the Force made him a legend, even before his fall from grace."
        }
    ];

const CharacterCard = ({ character, onOpen }) => {
    return (
        <div className="character-card" onClick={() => onOpen(character)}>
            {/* <img src={character.image} alt={character.name} /> */}
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
};

const BackStory = ({}) => {
    return(
        <div className="backstory">
            <h2>Backstory</h2>
            <h2><br>{character.name}</br></h2>
            <p>{character.backstory}</p>
        </div>
    )
}

const Characters = () => {
  return (
    <div>
      <h1>THESE ARE THE CHARACTERS</h1>
    </div>
  )
}

export default Characters;