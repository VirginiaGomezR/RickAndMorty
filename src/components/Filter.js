import React from 'react';

const Filter = ({userInput, handleUserInput}) =>{
    return(
    <div>
<form>
    <input type="text" value={userInput} onChange={(ev) => handleUserInput(ev)}/>
</form>
    </div>
    );
}

export default Filter;