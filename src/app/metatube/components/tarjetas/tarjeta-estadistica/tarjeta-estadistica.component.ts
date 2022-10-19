import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-tarjeta-estadistica',
  templateUrl: './tarjeta-estadistica.component.html',
  styleUrls: ['./tarjeta-estadistica.component.scss']
})
export class TarjetaEstadisticaComponent implements OnInit {

  @Input() titulo:string;
  @Input() subtitulo:string;
  @Input() numero;

  public comboboxItems : ListItem[] = [
    {
      content: "Ultimos 7 dias",
      selected: true
    },
    {
      content: "Ultimo Mes",
      selected: false
    },
    {
      content: "Ultimo Año",
      selected: false
    }
  ]

  public subscriptions = [
    {
      month: 'videos',
      count: '-111,333',
      up: false,
    },
    {
      month: 'vistas',
      count: '233,123',
      up: true,
    },
    {
      month: 'subscriptores',
      count: '543,854',
      up: true,
    },
    {
      month: 'Tiempo Visualizacion',
      count: '-99,112',
      up: false,
    },
    {
      month: 'Retencion',
      count: '678,112',
      up: true,
    }
  ]

  constructor() {

   }

  ngOnInit(): void {

  }

}
