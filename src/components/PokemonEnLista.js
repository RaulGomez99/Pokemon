import React, { Component } from 'react';
import '../App.css';

class PokemonEnLista extends Component{
    async componentWillMount(){
      const response = await fetch(this.props.pokemon);
      const json = await response.json();
      this.setState(json);
    }
    constructor(props){
      super(props);
      this.state = {sprites:[]}
      
    }
    onclick =()=>{
      this.props.onclick(this.state)
    }
    render(){
      return(
        <div className="pokeItem" key={this.state.name} onClick={this.onclick}>
            <span>{this.state.name}</span><img className="pokeFotoBusc" src={this.state.sprites.front_default} alt=""/>
        </div>
        
      );
    }
  }

  module.exports = PokemonEnLista;