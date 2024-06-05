import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailPageComponent } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { RegionsPageComponent } from './pages/regions-page/regions-page.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';


const routes:Routes=[

  {
    path:"by-type",
    component: TypesPageComponent
  },
  {
    path:"by-regions",
    component: RegionsPageComponent
  },
  {
    path:"pokemon/:id",
    component: PokemonDetailPageComponent
  },
  {
    path:"**",
    redirectTo:"by-regions"
  }
]

@NgModule({
  imports: [RouterModule.forChild( routes )

  ],
  exports: [
    RouterModule
  ],

})
export class PokemonsRoutingModule { }
