import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import {getCharacter} from '../../services/api';
import '../../stylesheets/Detail.scss';

const Detail = ({match,location}) => {
    console.log(location);
    const [infoCharacter, setInfoCharacter] = useState({});
    const [showErrorMessage, setShowErrorMessage]= useState (false);

    useEffect(()=>{
        getCharacter(match.params.id).then((data)=>{
            setShowErrorMessage(false); 
            setInfoCharacter(data)

        })
        .catch((error)=> setShowErrorMessage(true)); //actualiza estado a true para que muestre el mensaje de error

    },[match.params.id])
  
    return(
        <div>
            {showErrorMessage === true ?<p>{"El personaje que buscas no existe"}</p>:<section>
            <div><Link to="/">Volver</Link></div>
            <ul className="list-styles">
                <li>Nombre: {infoCharacter.name}</li>
                <li>Estado: {infoCharacter.status}</li>
                <li>Especie: {infoCharacter.species}</li>
                <img src={infoCharacter.image} alt={infoCharacter.name}/>
                <li>Origen: {infoCharacter.origin}</li>
                <li>Total de episodios: {infoCharacter.totalEpisodes}</li>
            </ul>
            </section>}
           
        </div>
    );
};

export default Detail;