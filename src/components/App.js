import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import ListWithFilter from './character/ListWithFilter';
import Detail from './character/Detail';
import LogoTitle from '../images/RickMorty_logo.png';
import LogoImage from '../images/RickHead.png';
import '../stylesheets/App.scss';


const App = () => {

  const [characterList, setCharacterList] = useState ([]); 
  const [userInput, setUserInput]= useState (''); //Filtro

  return (
    <div className="app">
      <header className="header">
              <img className="logo_title" src={LogoTitle} alt="Rick and Morty"></img>
              <img className="logo_image" src={LogoImage} alt="Rick"></img>
      </header>
            <main className="page">
            <Switch>
                <Route exact path="/">
                    <ListWithFilter 
                        characterList={characterList} 
                        setCharacterList={setCharacterList} 
                        userInput={userInput} 
                        setUserInput={setUserInput}/>
                </Route>
                <Route path="/detail/:id" component={Detail}/>
            </Switch>
            </main>
    </div>
  );
}

App.propTypes = {
  characterList: PropTypes.array,
};

App.propTypes = {
  setCharacterList: PropTypes.func,
};

App.propTypes = {
  userInput: PropTypes.string,
};

App.propTypes = {
  setUserInput: PropTypes.func,
};

export default App;
