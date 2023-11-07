import React, { useState } from 'react';
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

            <button>Testing This Out</button>

            {selectedCharacter && <BackStory character={selectedCharacter} onClose={closeBackstory} />}
        </div>
  )
};

export default Characters;