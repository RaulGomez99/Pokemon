import React, { useState, useEffect } from 'react';
import '../App.css';
import PokemonEnLista from './PokemonEnLista'

let texto="";

  const Busqueda = (props) =>{
    const [results, setResults] = useState(null);
    const [showResults, setShowResults] = useState([]);

    const filtroPokemon =(poke)=>{
      if(!texto || texto.length<=2) return false;
      if(poke.name.indexOf(texto)!==-1)console.log(poke)
      return poke.name.indexOf(texto)!==-1;
    }

    const filtroMostrar = (text)=>{
     texto=text;
      let resultas = Object.assign([],results)
      resultas = resultas.filter(filtroPokemon);
      setShowResults([])
      setTimeout(()=>setShowResults(resultas),1)
    }

    useEffect(()=>{
      const retornaPokemons = async()=>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=964");
        const json = await response.json();
        setResults(json.results);
      }
      retornaPokemons();
    },[]) 

    return (
      <div className="busqueda">
          <input type="text" placeholder="Nombre de Pokémon" onKeyUp={(ev)=>{
            filtroMostrar(ev.target.value);
          }} />
          {
            showResults.map(resp=>{
              return (<PokemonEnLista onclick={props.onclick} pokemon={resp.url} />)
            })
          }
        </div>
    )
  }

  module.exports = Busqueda;