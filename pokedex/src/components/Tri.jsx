import './Tri.css';

function Tri(){
        return(
            <form className='tri'>
                <div className='formtri'>
                <div className='ordre'>
                    <h4>Ordre</h4>
                    <select className='selordre'>
                        <option value="croissant">Croissant</option>
                        <option value="décroissant">Décroissant</option>
                    </select>
                </div>

                <div className='par'>
                    <h4>Par</h4>
                        <select className='selpar'>
                            <option>Numéro</option>
                            <option>Alphabétique</option>
                            <option>Poids</option>
                            <option>Taille</option>
                        </select>
                    </div>
                </div>
            </form>
        )
}

export default Tri