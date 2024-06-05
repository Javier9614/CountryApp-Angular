import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon, Type, Generation } from '../../interfaces/pokemon';

@Component({
  selector: 'pokemons-types-page',
  templateUrl: './types-page.component.html',
  styles: ``
})
export class TypesPageComponent {

  public types: Type= {
    damage_relations: {
      double_damage_from: [],
      double_damage_to: [],
      half_damage_from: [],
      half_damage_to: [],
      no_damage_from: [],
      no_damage_to: []
    },
    game_indices: [],
    generation: {
      name: '',
      url: ''
    },
    id: 0,
    move_damage_class: {
      name: '',
      url: ''
    },
    moves: [],
    name: '',
    names: [],
    past_damage_relations: [],
    pokemon: []
  };
  public pokemons:Pokemon[]=[];


  constructor(private pokemonsService:PokemonsService){}

  searchByType(term:string):void{
    this.pokemonsService.searchType(term)
    .subscribe( type =>{
      this.types = type;
      this.pokemons = type.pokemon;
      if(this.pokemons.length === 0) {
         this.pokemons =[]};
        this.pokemons.forEach(pokemon => {
         const urlSplit = pokemon.pokemon.url.split('/');
         pokemon.type=term;
          pokemon.id = urlSplit[6];
        });

    });

  }
}
