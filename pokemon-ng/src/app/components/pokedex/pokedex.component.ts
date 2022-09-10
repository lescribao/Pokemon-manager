import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { NotFoundError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemonData: Array<String>;

  constructor(private http: HttpClient) {

    this.pokemonData = []
   }

  ngOnInit(): void {
  }


  callJsonGetPokeApi(url: string):Observable<any> {


    return this.http.get(url).pipe(map((data: any) => {
      
      this.pokemonData.push
      
      return data;

    }), catchError((error) => {

      if (error.status == 404) {
        console.log(error.json());
      }

      return throwError(error);

    })
    );
  }
}
