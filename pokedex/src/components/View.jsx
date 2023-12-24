import Infobox from './Infobox';
import Filtre from './Filtre';
import Tri from './Tri';
import '../App.css';


export default function View(){
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
          <Infobox />{/*ligne3*/}
          <Infobox />  
          </div>
        </div>
        
      );
}