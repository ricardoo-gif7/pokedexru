import { Component } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraficoComponent } from '../grafico/grafico.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  pokemonId: number = 1; // Empezamos desde el primer Pokémon
  pokemonImagen: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;

  changePokemon(evento: number): void {
    this.pokemonId += evento;
    if (this.pokemonId < 1) this.pokemonId = 1; // Evitar números negativos
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  }
}