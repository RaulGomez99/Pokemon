import React, { useState, useEffect } from 'react';
import '../App.css';

const Ataque = (props)=>{
    const [ataque,setAtaque] = useState({names:false});
    const [mostrar,setMostrar]=useState(false)

    const fetchAtaque = async()=>{
        const response = await fetch(props.ataque.move.url);
        const json = await response.json();
        setAtaque(json);
    }
    useEffect(()=>{
        fetchAtaque();
    },[])

    useEffect(()=>{},[mostrar])

    return(
        <div className="ataque">
            {ataque.names?ataque.names[4].name:""}
            <h3>{ataque.names?ataque.flavor_text_entries[4].flavor_text:""}</h3>
        </div>
    )
}

module.exports = Ataque;