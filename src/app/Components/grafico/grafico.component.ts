import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  vidaPokemon: number = 0;
  escudoPokemon: number = 0;
  ataquePokemon: number = 0;
  nombrePokemon: string = "";
  tipoPokemon: string = "";
  idPokemon: string = "";

  @Input() set pokemonData(data: any) {
    if (data) {
      this.idPokemon = `#${data.id}`;
      this.nombrePokemon = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      this.tipoPokemon = data.types[0].type.name;
      
      // Actualizar estadísticas y limitar a 100
      this.vidaPokemon = Math.min(data.stats[0].base_stat);
      this.escudoPokemon = Math.min(data.stats[2].base_stat);
      this.ataquePokemon = Math.min(data.stats[1].base_stat);
    }
  }
}