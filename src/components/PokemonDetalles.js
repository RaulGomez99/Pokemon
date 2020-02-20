import React from 'react';
import Ataque from './Ataque'
import '../css/PokemonDetalles.css';

const PokemonDetalles = (props)=> {
      return (
        <div className="detallePokemon">
          <div className="datos">
            <div className="imagen"><img src={props.pokemon.sprites.front_default} 
                onClick={props.onclick} alt="" /></div>
            <div className="nombre">#{props.pokemon.id}&nbsp;{props.pokemon.name}</div>
            <div className="miniDatos">
              <div className="alturaPeso">Altura:{props.pokemon.height} Peso:{props.pokemon.weight}</div>
              <div className="tipos">
                {props.pokemon.types.map(pokTip=>{
                    return <img src={`https://veekun.com/dex/media/types/en/${pokTip.type.name}.png`} alt={pokTip.type.name}/>
                })}
              </div>
            </div>
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