import './infobox.css';
import Modal from './Modal';


function Infobox(props){

    return(
        
        <div className='box' onClick={() => Modal()}>
            
            <div className='info'>
                     
            </div>

        </div>
    )
 
}


export default Infobox
