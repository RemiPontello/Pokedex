import './Filtre.css'

function Filtre(){
    return(
        <form className='formfiltre'>
        <div className='filtre'>
            <div className='gen'>
                <h4>Génération</h4>
                <select className='selgen'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className='type'>
            <h4>Type</h4>
            <select className='seltype'>
                    <option>Feu</option>
                    <option>Eau</option>
                    <option>Ombre</option>
                    <option>Lumière</option>
                    <option>Feuille</option>
                </select>
            </div>
        </div>
        </form>
    )
}

export default Filtre