import React from 'react';
import '../App.css';

const PokemonDetalles = (props)=> {
      return (
        <div className="detallePokemon">
          <div className="imagen"><img src={props.pokemon.sprites.front_default} 
              onClick={props.onclick} alt="" /></div>
          <div className="nombre">{props.pokemon.name}</div>
          <div className="alturaPeso">Altura:{props.pokemon.height} Peso:{props.pokemon.weight}</div>
          <div className="tipos">{props.pokemon.types[0].type.name}{(props.pokemon.types[1]!=undefined)?
              ":"+props.pokemon.types[1].type.name:""}</div>
          <div className="ataques">
            {props.pokemon.moves[0].move.name}&nbsp;
            {(props.pokemon.moves[1])?props.pokemon.moves[1].move.name+"&nbsp;":""}
            {(props.pokemon.moves[2])?props.pokemon.moves[2].move.name+"&nbsp;":""}
            {(props.pokemon.moves[3])?props.pokemon.moves[3].move.name+"&nbsp;":""}
          </div>
        </div>
      );
    
  }

  module.exports = PokemonDetalles;