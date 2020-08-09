import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import {getCharacter} from '../../services/api';
import LogoMessage from '../../images/RickPeace.png';
import LogoDead from '../../images/DeadLogo.png';
import LogoHuman from '../../images/HumanLogo.png';
import LogoAlien from '../../images/AlienLogo.png';
import LogoLife from '../../images/LifeLogo.png';
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

    const aliveOrNot = infoCharacter.status === "Dead" ? (<p className="logo_text">Dead <img className="dead_logo" src={LogoDead} alt={"muerto"}></img></p>):(<p className="logo_text">Alive <img className="alive_logo" src={LogoLife} alt={"vivo"}></img></p>); //TODO

    const humanOrNot = infoCharacter.species === "Alien" ? (<p className="logo_text">Alien <img className="alien_logo" src={LogoAlien} alt={"alien"}></img></p>):(<p className="logo_text">Human <img className="human_logo" src={LogoHuman} alt={"humano"}></img></p>); //TODO


    return(
        <div className="detail_page">
            {showErrorMessage === true ? <p className="character_message">{"El personaje que buscas no existe..."} <img className="logo_message" src={LogoMessage} alt="Rick"></img></p> :
            <section>
            <div className="return_container"><Link className="return_link" to="/"><i className="fas fa-angle-double-left"></i> Volver</Link></div>
            <div className="container_card">
            <div className="image_detail"> <img src={infoCharacter.image} alt={infoCharacter.name}/></div>
            <ul className="card_list">
                <li><span>Nombre:</span> {infoCharacter.name}</li>
                <li><span>Estado:</span> {aliveOrNot}</li>
                <li><span>Especie:</span> {humanOrNot}</li>
                <li><span>Origen:</span> {infoCharacter.origin}</li>
                <li><span>Total de episodios:</span> {infoCharacter.totalEpisodes}</li>
            </ul>
            </div>
            </section>}
        </div>
    );
};


export default Detail;