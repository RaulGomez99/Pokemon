import React, { Component } from 'react';
import '../App.css';
import PokemonEnLista from './PokemonEnLista'

class Busqueda extends Component {
    constructor(props){
      super(props);
      this.state = {results:[{}],showResults:[{}]}
      this.texto="";
    }
    async componentDidMount(){
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=964");
      const json = await response.json();
      this.setState({results:json,showResults:[]});
    }
    ponerPokemon(url){
      return (<PokemonEnLista onclick={this.props.onclick} pokemon={url} />)
    }
    filtroPokemon =(poke)=>{
        if(!this.texto || this.texto.length<=2) return false;
        if(poke.name.indexOf(this.texto)!==-1)console.log(poke)
        return poke.name.indexOf(this.texto)!==-1;
    }
    filtroMostrar = ()=>{
        let results = Object.assign([],this.state.results.results)
        results = results.filter(this.filtroPokemon);
        this.setState({showResults:[]})
        console.log(this.state)
        setTimeout(()=>this.setState({showResults:results}),1)
    }
    render() {
      return (
        <div className="busqueda">
          <input type="text" placeholder="Nombre de Pokémon" onKeyUp={(ev)=>{
            this.texto = ev.target.value;
            this.filtroMostrar();
          }} />
          {
          this.state.showResults.map(resp=>{
            return (<PokemonEnLista onclick={this.props.onclick} pokemon={resp.url} />)
          })}
        </div>
      );
    }
  }

  module.exports = Busqueda;