import React from 'react';
import ListWithFilter from './character/ListWithFilter';
import LogoTitle from '../images/RickMorty_logo.png';
import Detail from './character/Detail'


const HomePage = () =>{
    return(
        <div>
            <header>
            <img src={LogoTitle} alt="Rick and Morty"></img>
            </header>
            <main>
                <Detail id={2} />
                <ListWithFilter/>
            </main>
        </div>
    );
}
export default HomePage;