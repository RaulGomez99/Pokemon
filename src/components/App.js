import React, { useState } from 'react';
import '../App.css';
import Pokedex from './Pokedex'
import Busqueda from './Busqueda'
import PokemonDetalles from './PokemonDetalles'

const App = ()=> {
  //Estados
  const [pokemon, setPokemon] = useState(null);
  const [mostrarPokemon, setMostrarPokemon] = useState(true);

  //Funciones
  const onclick = (pokemon)=>{
    setMostrarPokemon(!mostrarPokemon);
    setPokemon(pokemon);
  }

  const onclickVuelta = ()=>{
    setMostrarPokemon(true);
  }

  return (
    <div>
      <Pokedex evento={onclickVuelta}/>
      {mostrarPokemon ? <Busqueda onclick={onclick}/> 
          : <PokemonDetalles onclick={onclick} pokemon={pokemon}/>
      }
    </div>
  )
}

export default App;
