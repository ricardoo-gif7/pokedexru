import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  vidaPokemon: number = 80;
  escudoPokemon: number = 90;
  ataquePokemon: number = 30;
  nombrePokemon: string = "Mewtwo";
  tipoPokemon: string = "Psíquico";
  idPokemon: string = "150";
}
