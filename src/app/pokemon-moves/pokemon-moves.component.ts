import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss']
})
export class PokemonMovesComponent implements OnInit {

  @Input('pokemon') pokemon: Pokemon;

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
