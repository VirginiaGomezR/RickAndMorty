const getFirstCharacters = () => {
    return fetch('https://rickandmortyapi.com/api/character/') //20 primeros
      .then(response => response.json())
      .then((data) => {//console.log(data)
        return data.results.map((character) => {
        
          return {
            id: character.id,
            name: character.name,
            specie: character.species,
            image: character.image,
          };
        });
      });
  };
  
  const getCharactersByName = (userInput) =>{
    return fetch(`https://rickandmortyapi.com/api/character/?name=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          specie: character.species,
          image: character.image,
        };
      });
    } );

  };


  const getCharacter = (id) =>{
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then((data) => {
    return{
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      image: data.image,
      origin: data.origin.name,
      totalEpisodes: data.episode.length,
    }

    } );

  };

  export  {getFirstCharacters, getCharactersByName, getCharacter};