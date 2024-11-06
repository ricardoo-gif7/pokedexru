import { Component } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [CommonModule, PokedexComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
  
  pokemonId: number = 0;
  pokemonImagen: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  isScanning: boolean = false;
  pokemonData: any = null; 
  pokemonDisplayClass: string = ''; 

  ngOnInit() {
    this.updatePokemonImage();
  }

  updatePokemonImage(): void {
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  }

  changePokemon(evento: number): void {
    // Evitar que se inicie un nuevo escaneo si ya está en proceso
    if (this.isScanning) {
      return; // Si ya se está escaneando, salir de la función
    }

    // Si intenta retroceder desde 0, no hacemos nada
    if (this.pokemonId === 0 && evento < 0) {
      return;
    }

    this.pokemonDisplayClass = 'scanning'; // Activa la clase de escaneo solo para la imagen

    // Cambia la imagen y escanea
    setTimeout(() => {
      this.pokemonId += evento; // Cambia el Pokémon
      this.updatePokemonImage();

      fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
        .then(response => response.json())
        .then(data => {
          this.pokemonData = data;
          this.pokemonDisplayClass = ''; // Desactiva el escáner después de cargar la imagen
        })
        .catch(error => {
          console.error('Error:', error);
        })
        .finally(() => {
          this.isScanning = false; // Desactiva el escáner en cualquier caso
        });

    }, 1000); // Duración del escáner
}


}