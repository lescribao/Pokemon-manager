import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private readonly baseUrl2 = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPokemonList(currentPage: String): Observable<pokeList> {
    return this.http.get<pokeList>(currentPage);
  }

  getPokemonDetails(pokemonUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonUrl);
  }

  addPokemon(pokemon: Pokemon): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(pokemon);
    console.log(body)
    return this.http.post(this.baseUrl2 + '/add-pokemon', body, {'headers':headers})

  }
}
export interface pokeList {
  next: string;
  previous: string;
  results: Array<Pokemon>;
}

/*
export interface poke {
  name: string;
  url: string;
}
*/

export interface Pokemon {

  name: string;
  sprites: {
    front_default: string
  };
  stats: [
    {
      //hp
      base_stat: number;
    }, {
      //attack
      base_stat: number;
    }, {
      //defense
      base_stat: number;
    }, {
      //special-attack
      base_stat: number;
    }, {
      //special-defense
      base_stat: number;
    }

  ]


}
