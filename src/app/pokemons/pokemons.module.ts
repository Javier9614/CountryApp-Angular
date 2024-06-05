import { NgModule } from '@angular/core';
import { PokemonDetailPageComponent } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { RegionsPageComponent } from './pages/regions-page/regions-page.component';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';



@NgModule({
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule

  ],

  declarations: [
    PokemonDetailPageComponent,
  TypesPageComponent,
  RegionsPageComponent,
  PokemonTableComponent
  ]
})
export class PokemonsModule { }
