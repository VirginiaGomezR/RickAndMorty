import React from 'react';
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

export default List;