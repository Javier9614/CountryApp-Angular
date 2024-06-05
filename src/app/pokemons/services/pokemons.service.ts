import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Type } from '../interfaces/pokemon';
import { Pokedex } from '../interfaces/pokemons-pokedex';

@Injectable({providedIn: 'root'})
export class PokemonsService {

  private apiUrl:string="https://pokeapi.co/api/v2";


  constructor(private http: HttpClient) { }


  searchType (term:string): Observable<Type>{

    const url = `${this.apiUrl}/type/${term}`;

    return this.http.get<Type>(url)
    .pipe(
      catchError( () => of ( ) ));



  }

  searchRegion (term:string): Observable<Pokedex>{

    const url = `${this.apiUrl}/pokedex/${term}`;

    return this.http.get<Pokedex>(url)
    .pipe(
      catchError( () => of ( ) ));



  }

}
