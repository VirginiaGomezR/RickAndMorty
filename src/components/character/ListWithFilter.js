import React, {useState, useEffect} from 'react';
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

    useEffect(() => { //ejecuta lo que tengamos en el body de la funcion segun el valor de las dependecias (el cambio de valor)
        getFirstCharacters().then(data => { //recoge la promesa y podemos hacer otro then para setear el estado...
            setCharacterList(data);
        });
    }, [setCharacterList]);


    useEffect(() => { 
    
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
export default ListWithFilter;