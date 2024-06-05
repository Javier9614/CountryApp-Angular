import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountriesRoutingModule } from './countries/countries.routing.module';

const routes: Routes = [
  // {
  //   path:"",
  //   component:HomePageComponent
  // },
  {
    path:"about",
    component:AboutPageComponent
  },
  {
    path:"contact",
    component:ContactPageComponent
  },
  {
    path:"countries",
    loadChildren:() => import ('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path:"pokemons",
    loadChildren:() => import ('./pokemons/pokemons.module').then(m => m.PokemonsModule)
  },
  {
    path:"**",
    redirectTo:"pokemons"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
