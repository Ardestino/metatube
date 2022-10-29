import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';
import { Store } from '@ngrx/store';
import { AppState } from "src/app/metatube/store";
import { Channel, Proyecto } from "src/api";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta-estadistica',
  templateUrl: './tarjeta-estadistica.component.html',
  styleUrls: ['./tarjeta-estadistica.component.scss']
})
export class TarjetaEstadisticaComponent implements OnInit {

  @Input() titulo:string;
  @Input() subtitulo:string;
  @Input() numero;

  imagen_canal_url$ : Observable<string>;

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

  public subscriptions = []

  constructor(private store: Store<AppState>) {
    this.imagen_canal_url$ = store.select(state => state.proyectos.canal_seleccionado.thumbnail_high_url);
    store.select(state => state.proyectos.canal_seleccionado).subscribe((canal_seleccionado)=>{
      this.subscriptions = [
        {
          categoria: 'videos',
          valor: canal_seleccionado.videoCount,
          incremental: true,
        },
        {
          categoria: 'vistas',
          valor: canal_seleccionado.viewCount,
          incremental: true,
        },
        {
          categoria: 'subscriptores',
          valor: canal_seleccionado.subscriberCount,
          incremental: true,
        },
        {
          categoria: 'Tiempo Visualizacion',
          valor: '0',
          incremental: true,
        },
        {
          categoria: 'Retencion',
          valor: '0',
          incremental: true,
        }
      ]
    });
   }

  ngOnInit(): void {

  }

}
