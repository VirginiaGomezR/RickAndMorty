import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import List from './List';
import '../../stylesheets/ListWithFilter.scss';
import {getFirstCharacters, getCharactersByName} from '../../services/api';

const ListWithFilter = ({characterList, setCharacterList, userInput, setUserInput}) =>{

    const [showErrorMessage, setShowErrorMessage]= useState (false);
    
    const handleUserInput = (ev) =>{ 
        ev.preventDefault();
        setUserInput(ev.target.value);
    };

    //ordena alfabeticamente
    const sortName = ( a, b ) =>{
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
      }
      
    characterList.sort( sortName );

    useEffect(() => { 
      if(userInput ===''){
        getFirstCharacters().then(data => { 
            setCharacterList(data);
        });
      }
    }, [userInput,setCharacterList]);


    useEffect(() => { 
    console.log(userInput);
    if(userInput !== '') {
        getCharactersByName(userInput).then(data => { 
            setShowErrorMessage(false); //volver al estado por defecto, se oculta el mensaje de error
            setCharacterList(data);
        })
        .catch((error)=> setShowErrorMessage(true)); //actualiza estado a true para que muestre el mensaje de error
    }
    }, [userInput, setCharacterList]);

    

    return(
        <div>
            <Filter userInput = {userInput} handleUserInput={handleUserInput}/>
            {showErrorMessage === true ? <div className="filter_message">{`No hay ningún personaje que coincida con la palabra ${userInput}`}</div> :  <List characters={characterList} userInput={userInput}/> }
           
        </div>
    );
}

ListWithFilter.propTypes = {
    characterList: PropTypes.array,
  };
  
ListWithFilter.propTypes = {
    setCharacterList: PropTypes.func,
  };

ListWithFilter.propTypes = {
    userInput: PropTypes.string,
  };

ListWithFilter.propTypes = {
    setUserInput: PropTypes.func,
  };
export default ListWithFilter;