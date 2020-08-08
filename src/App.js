import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import ListWithFilter from './components/character/ListWithFilter';
import LogoTitle from './images/RickMorty_logo.png';
import Detail from './components/character/Detail'
import './stylesheets/App.scss';


const App = () => {

  const [characterList, setCharacterList] = useState ([]); 
  const [userInput, setUserInput]= useState (''); //Filtro

  return (
    <div className="App">
      <header>
              <img src={LogoTitle} alt="Rick and Morty"></img>
      </header>
            <main>
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

export default App;
