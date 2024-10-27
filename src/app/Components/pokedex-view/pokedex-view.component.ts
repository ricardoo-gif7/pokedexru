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
  pokemonId: number = 0;
  pokemonImagen:string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+this.pokemonId+'.png';

  changePokemon(evento:number) : void{
    this.pokemonId+=evento;
    this.pokemonImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+this.pokemonId+'.png';
  }

  
}