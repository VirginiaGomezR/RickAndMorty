import React from 'react';
import PropTypes from 'prop-types';
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

Filter.propTypes = {
    handleUserInput: PropTypes.func,
  };

Filter.propTypes = {
    userInput: PropTypes.string,
  };

export default Filter;