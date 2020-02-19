import React, { useState } from 'react';
import Pokedex from './Pokedex'
import Busqueda from './Busqueda'
import PokemonDetalles from './PokemonDetalles'
import AtaqueMostrarDetalles from './AtaqueMostrarDetalles'

const App = ()=> {
  //Estados
  const [pokemon, setPokemon] = useState(null);
  const [ataque, setAtaque] = useState(null);
  const [mostrarPokemon, setMostrarPokemon] = useState(true);

  //Funciones
  const onclick = (pokemon)=>{
    setMostrarPokemon(!mostrarPokemon);
    setPokemon(pokemon);
  }

  const onclickAtaque = (atack) =>{
    console.log(atack)
    setAtaque(atack);
  }

  const onclickVuelta = ()=>{
    setMostrarPokemon(true);
  }

  const opciones = () => {
    if(mostrarPokemon){
      return(<Busqueda onclick={onclick}/>);
    }else{
      return (
      <div className="content">
        <AtaqueMostrarDetalles ataque={ataque}/>
        <PokemonDetalles onclick={onclick} pokemon={pokemon} onclickAtaque={onclickAtaque}/>
      </div>
      )
    }
  }

  return (
    <div>
      <Pokedex evento={onclickVuelta}/>
      {opciones()}
    </div>
  )
}

export default App;
