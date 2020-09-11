import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {HttpClientModule} from '@angular/common/http';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {PokemonMovesComponent} from './pokemon-moves/pokemon-moves.component';
import {PokemonSideComponent} from './pokemon-side/pokemon-side.component';
import {PokemonService} from './shared/service/pokemon.service';
import {AppRoutingModule} from './shared/routing/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailComponent,
    PokemonMovesComponent,
    PokemonSideComponent,
    PokemonMovesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
