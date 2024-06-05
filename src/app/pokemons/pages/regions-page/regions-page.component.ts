import { Component } from '@angular/core';
import { Pokedex, PokemonEntry } from '../../interfaces/pokemons-pokedex';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'pokemons-regions-page',
  templateUrl: './regions-page.component.html',
  styles: ``
})
export class RegionsPageComponent {
public pokedex!:Pokedex;
public pokemons:PokemonEntry[]=[];

constructor(private pokemonsService:PokemonsService){}

  searchByRegion(term:string):void{
    this.pokemonsService.searchRegion(term)
    .subscribe( pokedex =>{
      this.pokedex = pokedex;
      this.pokemons = pokedex.pokemon_entries;

    })
}
}
