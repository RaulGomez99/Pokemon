import React, {useState, useEffect} from 'react';
import '../App.css';

const AtaqueMostrarDetalle = (props) =>{
    const [ataque, setAtaque] = useState(null);

    useEffect(()=>{
        setAtaque(props.ataque);
    })
    if(ataque){
        return(
            <div className="ataqueDetalle">
                {ataque.name}
            </div>
        )
    }else{
        return(
            <div className="ataqueDetalle">
            </div>
        ) 
    }
    

    

}

module.exports = AtaqueMostrarDetalle;