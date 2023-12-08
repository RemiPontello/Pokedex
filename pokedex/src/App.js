import './App.css';
import React from 'react';
import Infobox from './components/Infobox';
import Filtre from './components/Filtre';
import Tri from './components/Tri';


function App() {
  return (
    <div className="App">
      <h1>Pokédex</h1>
      <div className='fil'> <Filtre /> </div>
      <div className='tris'> <Tri /> </div>
      
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
    </div>
    
  );
}

export default App;
