import React from 'react';
import {Board} from './components';

function App(){
  {/*const submitHandler = (e) => {
    e.preventDefault();
    //o "(e)" simboliza "evento". no caso o evento é o "preventDefault" que vai impedir que a aplicacao atualize a cada caractere inserido (pois o padrao é o reload)
  }*/}

  return(
    <div className='App'>
      <Board />
    </div>
  );
}

export default App;