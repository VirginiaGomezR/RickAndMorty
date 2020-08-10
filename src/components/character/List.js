import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({characters, userInput}) =>{
    return(
        <div className="cards">
           {characters ? characters.map((character)=>(
            <Card key={character.id} data={character} userInput={userInput}/>
                )) : <div>Estoy vacio</div>}
        </div>
    );
};

List.propTypes = {
    characters: PropTypes.array,
  };

List.propTypes = {
    userInput: PropTypes.string,
  };

export default List;