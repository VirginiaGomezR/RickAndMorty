import React from 'react';
import {Link} from 'react-router-dom';


const Card = ({data, userInput}) =>{
return(
    <div>
    <Link to={`/detail/${data.id}`} onClick={() => localStorage.setItem('userInput', userInput)}>
       <h2>{data.name}</h2>
       <img src={data.image} alt={data.name}/>
       <p>{data.specie}</p>
    </Link>
    </div>
);
}

export default Card;
