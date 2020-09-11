import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

@Injectable()
export class PokemonService {
  public pokeApi: any;

  constructor(
    private http: HttpClient
  ) {
    this.pokeApi = environment.baseUrl;
  }

  getPokemon(id: number, limit: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.pokeApi}?offset=${id}&limit=${limit}`);
  }

  getPokemonId(id): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokeApi}/${id}`);
  }

}
