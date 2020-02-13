import React, { Component } from 'react';
import titulo from '../img/pokeapi.png'
import '../App.css';

class Pokedex extends Component {
    render() {
      return (
        <div className="pokedex">
          <img src={titulo} alt="" onClick={this.props.evento}/>
        </div>
      );
    }
  }

  module.exports = Pokedex;