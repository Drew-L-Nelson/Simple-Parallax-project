import React, { useState } from 'react';
import '../styles/Characters.css';

//rebuild this data fetching in Firebase after testing
import characters from '../data/characters.json';

const CharacterCard = ({ character, onOpen }) => {
    return (
        <div className="character-card" onClick={() => onOpen(character)}>
            {/* <img src={character.image} alt={character.name} /> */}
            <h2>{character.name}</h2>
        </div>
    );
};

const BackStory = ({ character, onClose }) => {
    return(
        <div className="backstory">
            <h2>Backstory</h2>
            <h2>{character.name}</h2>
            <p>{character.backstory}</p>
            <button onClick={onClose}>Close</button>
        </div>
    )
};



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

            {selectedCharacter && <Backstory character={selectedCharacter} onClose={closeBackstory} />}
        </div>
  )
};

export default Characters;