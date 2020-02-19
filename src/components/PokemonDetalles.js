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
          <div className="tipos">
            {props.pokemon.types.map(pokTip=>{
                return <img src={`0${pokTip.type.name}.png`}/>
            })}
          </div>
          <div className="ataques">
            {props.pokemon.moves.map(move=>{
           //   console.log(move);
              
              return <Ataque key={move.name} ataque={move} onclickAtaque={props.onclickAtaque}/>
            })}
          </div>
        </div>
      );
    
  }

  module.exports = PokemonDetalles;