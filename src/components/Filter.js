import React from 'react';
import '../stylesheets/Filter.scss';

const Filter = ({userInput, handleUserInput}) =>{
    return(
    <div className="filter">
        <form className="form">
            <input className="userInput" type="text" placeholder="Escribe un personaje" value={userInput} onChange={(ev) => handleUserInput(ev)}/>
        </form>
    </div>
    );
}

export default Filter;