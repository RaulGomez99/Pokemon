import React from 'react';
import Ataque from './Ataque'
import '../App.css';

const PokemonDetalles = (props)=> {
      return (
        <div className="detallePokemon">
          <div className="imagen"><img src={props.pokemon.sprites.front_default} 
              onClick={props.onclick} alt="" /></div>
          <div className="nombre">{props.pokemon.name}</div>
          <div className="alturaPeso">Altura:{props.pokemon.height} Peso:{props.pokemon.weight}</div>
          <div className="tipos">{props.pokemon.types[0].type.name}
              {(props.pokemon.types[1]!==undefined)?
              ":"+props.pokemon.types[1].type.name:""}</div>
          <div className="ataques">
            {props.pokemon.moves.map(move=>{
           //   console.log(move);
              
              return <Ataque key={move.name} ataque={move}/>
            })}
          </div>
        </div>
      );
    
  }

  module.exports = PokemonDetalles;