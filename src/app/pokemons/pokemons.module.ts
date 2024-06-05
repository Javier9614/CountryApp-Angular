import { NgModule } from '@angular/core';
import { PokemonDetailPageComponent } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { RegionsPageComponent } from './pages/regions-page/regions-page.component';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';



@NgModule({
  imports: [
    CommonModule,
    PokemonsRoutingModule

  ],

  declarations: [
    PokemonDetailPageComponent,
  TypesPageComponent,
  RegionsPageComponent
  ]
})
export class PokemonsModule { }
