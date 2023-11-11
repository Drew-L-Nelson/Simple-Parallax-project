import React, { useState } from 'react';
import Landscape2 from '../Images/Landscape2.jpg'
import '../styles/Characters.css';

//rebuild this data fetching in Firebase after testing
import characters from '../data/characters.json';

const CharacterCard = ({ character, onOpen }) => (
  <div className="character-card" onClick={() => onOpen(character)}>
    {/* Display character info here */}
    <h2>{character.name}</h2>
  </div>
);

const BackStory = ({ character, onClose }) => (
  <div className="backstory">
    {/* Display character backstory here */}
    <h2>{character.name}</h2>
    <p>{character.backstory}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

//testing function for button color change
const colorChange = (e) => {
    e.target.style.backgroundColor = "red";
}

const Characters = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const openBackstory = (character) => {
        setSelectedCharacter(character);
    };

    const closeBackstory = () => {
        setSelectedCharacter(null);
    };

    
    return (
        <div className="characters-container">
            <div className="characters-scroll-container">
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} onOpen={openBackstory}/>
                ))}
            </div>


            {selectedCharacter && <BackStory character={selectedCharacter} onClose={closeBackstory} />}
        </div>
  )
};

export default Characters;