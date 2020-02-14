import React, { useState, useEffect } from 'react';
import '../App.css';

const PokemonEnLista = (props) => {
  const [pokemon,setPokemon] = useState({name:"",sprites:{front_default:""}});
     useEffect(async()=>{
      const response = await fetch(props.pokemon);
      const json = await response.json();
      setPokemon(json);
    },[])

    const onclick =()=>{
      props.onclick(pokemon)
    }

    return(
      <div className="pokeItem" key={pokemon.name} onClick={onclick}>
          <span>{pokemon.name}</span><img className="pokeFotoBusc" src={pokemon.sprites.front_default} alt=""/>
      </div>
      
    );
  }

  module.exports = PokemonEnLista;