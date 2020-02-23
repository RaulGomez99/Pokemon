import React, {useState, useEffect} from 'react';
import '../css/AtaqueMostrarDetalles.css';

const AtaqueMostrarDetalle = (props) =>{
    const [ataque, setAtaque] = useState(null);

    useEffect(()=>{
        setAtaque(props.ataque);
    })
    if(ataque){
        return(
            <div className="ataqueDetalle">
                <p>{ataque.names[4].name}</p>
                <p>{ataque.pp}</p>
                <p>{ataque.flavor_text_entries[4].flavor_text}</p>
                <img src={`https://veekun.com/dex/media/damage-classes/${ataque.damage_class.name}.png`} className="tipoMovimiento" alt={ataque.damage_class.name}/>
                    <img src={`https://veekun.com/dex/media/types/en/${ataque.type.name}.png`} className="tipoMovimiento" alt={ataque.type.name}/>
            </div>
        )
    }else{
        return(
            <div className="ataqueDetalle">
                <h1>No hay ningún ataque seleccionado</h1>
            </div>
        ) 
    }
    

    

}

module.exports = AtaqueMostrarDetalle;