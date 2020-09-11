import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../shared/models/pokemon';
import {PokemonService} from '../shared/service/pokemon.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public pokemons: any;
  public pokemon: any = [];
  public sub: any;
  public query: string;
  public offset = 0;
  public limit = 20;

  constructor(
    private readonly pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  onSubmit(): void {
    this.offset += 20;
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService
      .getPokemon(this.offset, this.limit)
      .subscribe((data: Pokemon[]) => {
        this.pokemons = data;
        Object.keys(this.pokemons.results).map(key => {
          this.showPokemon(this.pokemons.results[key].name);
        });
      });
  }

  showPokemon(id: any): void {
    this.pokemonService
      .getPokemonId(id)
      .subscribe((data: Pokemon) => {
        // @ts-ignore
        const {url} = data.species;
        const newPokemon = {
          id: data.id,
          name: data.name,
          imageFront: data.sprites.front_default,
          imageBack: data.sprites.back_default,
          species: url,
        };

        this.pokemon.push(newPokemon);
      });
  }

}
