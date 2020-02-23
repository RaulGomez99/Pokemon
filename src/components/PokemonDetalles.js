import React, {useEffect, useState} from 'react';
import Ataque from './Ataque'
import '../css/PokemonDetalles.css';

const PokemonDetalles = (props)=> {

  const [descripcion, setDescripcion] = useState(null);

  const fetchDescripcion = async()=>{
    console.log(props);
    
    const response = await fetch(props.pokemon.species.url);
    console.log(response);
    
    const json = await response.json();
    console.log(json);
    
    setDescripcion(json.flavor_text_entries[4].flavor_text);
  }
  useEffect(()=>{
      fetchDescripcion();
  },[])


      return (
        <div className="detallePokemon">
          <div className="taparAtaques"></div>
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
              <div className="descripcionPokemon">
                {descripcion?descripcion:""}
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