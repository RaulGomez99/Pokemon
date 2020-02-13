import React, { useState, useEffect } from 'react';
import '../App.css';
import PokemonEnLista from './PokemonEnLista'

  const Busqueda = (props) =>{
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState([]);
    const [texto,setTexto] = null;

    const filtroMostrar = (text)=>{
     setTexto(text);
     console.log(results)
      let results = Object.assign([],results.results)
      results = results.filter(filtroPokemon);
      //setShowResults([])
      setTimeout(()=>setShowResults(results),1)
    }

    const filtroPokemon =(poke)=>{
      if(!texto || texto.length<=2) return false;
      if(poke.name.indexOf(texto)!==-1)console.log(poke)
      return poke.name.indexOf(texto)!==-1;
    }

    useEffect(async()=>{
      //if(results!==null) return;
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=964");
      const json = await response.json();
      setResults({results:json});
    },[]) 

    return (
      <div className="busqueda">
          <input type="text" placeholder="Nombre de Pokémon" onKeyUp={(ev)=>{
            filtroMostrar(ev.target.value);
          }} />
          {
          // showResults.map(resp=>{
          //   return (<PokemonEnLista onclick={props.onclick} pokemon={resp.url} />)
          // })
        }
        </div>
    )
  }

  module.exports = Busqueda;