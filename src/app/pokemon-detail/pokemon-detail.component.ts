import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonService } from '../shared/service/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon: Pokemon;
  public sub: any;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPokemonId();
  }

  getPokemonId(): void {
    this.sub = this.route.params.subscribe(params => {
      this.pokemonService
        .getPokemonId(params.id)
        .subscribe((data: Pokemon) => {
          this.pokemon = data;
        });
    });
  }

  showPokemon(id): void {
    this.pokemonService
      .getPokemonId(id)
      .subscribe((data: Pokemon) => {
        this.pokemon = data;
      });
  }

  submitPokemon(event): void {
    event.preventDefault();
    const form = new FormData(event.target);
    const id = form.get('id');
    this.showPokemon(id);
  }
}
