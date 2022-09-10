import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
}
export interface pokeList {
  next: string;
  previous: string;
  results: Array<pokemon>;
}

/*
export interface poke {
  name: string;
  url: string;
}
*/

export interface pokemon {

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
