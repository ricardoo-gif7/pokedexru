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
  vidaPokemon: number = 70;
  escudoPokemon: number = 90;
  ataquePokemon: number = 50;
  nombrePokemon: string = "";
  tipoPokemon: string = "";
  idPokemon: string = "";

  @Input() set pokemonData(data: any) {
    if (data) {
      this.idPokemon = `#${data.id}`;
      this.nombrePokemon = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      this.tipoPokemon = data.types[0].type.name;
      // Ya no modificamos vida, ataque ni escudo
    }
  }
}