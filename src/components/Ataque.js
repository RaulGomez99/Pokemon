import React, { useState, useEffect } from 'react';
import '../App.css';

const Ataque = (props)=>{
    const [ataque,setAtaque] = useState({names:false});

    const fetchAtaque = async()=>{
        const response = await fetch(props.ataque.move.url);
        const json = await response.json();
        setAtaque(json);
    }
    useEffect(()=>{
        fetchAtaque();
    },[])


    const onclickAtaque = () =>{
        props.onclickAtaque(ataque)
    }

    if(ataque.names){
        return(
            <div className="ataque" onClick={onclickAtaque}>
                <span className="ataqueNombre">{ataque.names[4].name}</span>
                <div className="imagenes">
                    <img src={`https://veekun.com/dex/media/damage-classes/${ataque.damage_class.name}.png`} className="tipoMovimiento" alt={ataque.damage_class.name}/>
                    <img src={`https://veekun.com/dex/media/types/en/${ataque.type.name}.png`} className="tipoMovimiento" alt={ataque.type.name}/>
                </div>
                <span className="pp">{ataque.pp}/{ataque.pp}</span>
                
            </div>
        )
    }else{
        return (
            <div className="ataque" onClick={onclickAtaque}></div>
        )
    }
    
}

module.exports = Ataque;