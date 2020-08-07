import React, {useState, useEffect}from 'react';
import {getCharacter} from '../../services/api';

const Detail = ({id}) => {

    const [infoCharacter, setInfoCharacter] = useState({});

    useEffect(()=>{
        getCharacter(id).then((data)=>{
            setInfoCharacter(data)

        })
    },[id])
    return(
        <div>
            <div>{infoCharacter.name}</div>
            <div>{infoCharacter.status}</div>
        </div>
    );
};

export default Detail;