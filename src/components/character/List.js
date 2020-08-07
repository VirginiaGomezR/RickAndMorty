import React from 'react';
import Card from './Card';

const List = ({characters}) =>{
    return(
        <div>
           {characters ? characters.map((character)=>(
            <Card key={character.id} data={character}/>
                )) : <div>Estoy vacio</div>}
        </div>
    );
};

export default List;