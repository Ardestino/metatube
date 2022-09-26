import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-estadistica',
  templateUrl: './tarjeta-estadistica.component.html',
  styleUrls: ['./tarjeta-estadistica.component.scss']
})
export class TarjetaEstadisticaComponent implements OnInit {

  @Input() titulo:string;
  @Input() subtitulo:string;
  @Input() numero;

  constructor() {
    this.numero = Math.floor(Math.random() * 1000);
   }

  ngOnInit(): void {
  }

}
