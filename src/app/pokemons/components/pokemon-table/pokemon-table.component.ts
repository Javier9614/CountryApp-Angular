import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonEntry } from '../../interfaces/pokemons-pokedex';

@Component({
  selector: 'pokemons-table',
  templateUrl: './pokemon-table.component.html',
  styles: ``
})
export class PokemonTableComponent {
@Input()
public pokemons:Pokemon[]=[];
@Input()
public pokemonsEntry:PokemonEntry[]=[];

}
