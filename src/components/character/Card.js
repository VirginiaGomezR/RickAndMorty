import React from 'react';


const Card = ({data}) =>{
return(
    <div>
       <h2>{data.name}</h2>
       <img src={data.image} alt={data.name}/>
       <p>{data.specie}</p>
    </div>
);
}

export default Card;
