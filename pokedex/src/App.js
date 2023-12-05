import './App.css';
import React from 'react';
import Infobox from './components/Infobox';

function App() {
  return (
    <div className="App">
      <h1>Pokédex</h1>
      <div className='divbox'>
      <Infobox />
      <Infobox />
      <Infobox />
      <Infobox />
      <Infobox />
      <Infobox />  {/*ligne1*/}
      <Infobox /> 
      <Infobox /> 
      <Infobox /> 
      <Infobox /> 
      <Infobox /> 
      <Infobox /> {/*ligne2*/}
      <Infobox />
      <Infobox />
      <Infobox />
      <Infobox />
      <Infobox />
      <Infobox /> {/*ligne3*/}
      </div>
      <div className='pokeball'></div>
    </div>
    
  );
}

export default App;
