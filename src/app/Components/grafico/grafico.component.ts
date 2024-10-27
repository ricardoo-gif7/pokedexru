import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  vidaPokemon: number = 100;
  escudoPokemon: number = 100;
  ataquePokemon: number = 100;
  nombrePokemon: string = "Mewtwo";
  tipoPokemon: string = "Psíquico";
  idPokemon: string = "#150";
}
