import React from 'react';
import titulo from '../img/pokeapi.png'
import '../css/Pokedex.css';

const Pokedex = (props)=> {
    return (
      <div className="pokedex">
        <img src={titulo} alt="" onClick={props.evento}/>
      </div>
    );
  }

  module.exports = Pokedex;