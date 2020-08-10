import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../stylesheets/Card.scss';


const Card = ({data}) =>{
return(
    <div className="card">
    <Link className="links_card" to={`/detail/${data.id}`}>
       <h2 className="title_card">{data.name}</h2>
       <div className="image_card"><img src={data.image} alt={data.name}/></div>
       <p className="description_card">{data.specie}</p>
    </Link>
    </div>
);
}

Card.propTypes = {
    data: PropTypes.object,
  };

export default Card;
