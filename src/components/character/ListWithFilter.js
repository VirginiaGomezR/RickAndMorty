import React, {useState, useEffect} from 'react';
import Filter from '../Filter';
import List from './List';
import {getFirstCharacters, getCharactersByName} from '../../services/api';


const ListWithFilter = () =>{
    const [characterList, setCharacterList] = useState ([]);
    const [userInput, setUserInput]= useState ('');
    const [showErrorMessage, setShowErrorMessage]= useState (false);
    
    const handleUserInput = (ev) =>{ 
        setUserInput(ev.target.value);
    };

    useEffect(() => { //ejecuta lo que tengamos en el body de la funcion segun el valor de las dependecias (el cambio de valor)
     
        getFirstCharacters().then(data => { //recoge la promesa y podemos hacer otro then para setear el estado...
            setCharacterList(data);
        });
      }, []);


      useEffect(() => { 
     
        getCharactersByName(userInput).then(data => { 
            setShowErrorMessage(false); //volver al estado por defecto, se oculta el mensaje de error
            setCharacterList(data);
        })
        .catch((error)=> setShowErrorMessage(true)); //actualiza estado a true para que muestre el mensaje de error
      }, [userInput]);

    

    return(
        <div>
            <Filter userInput = {userInput} handleUserInput={handleUserInput}/>
            {showErrorMessage === true ? <div>{`No hay ningún personaje que coincida con la palabra ${userInput}`}</div> :  <List characters={characterList} /> }
           
        </div>
    );
}
export default ListWithFilter;