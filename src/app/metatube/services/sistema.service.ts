import { Injectable } from '@angular/core';
import { Proyecto, User, ApiService } from "src/api/index";
import { Observable, observable } from 'rxjs';
import charts from 'src/@youpez/data/charts';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  public proyectos : Observable<Proyecto[]>;
  public projecto_seleccionado : Observable<Proyecto>;

  // Convertir estas graficas en herramientas reales
  public charts = charts;

  // TODO: Organizar estas variables
  views;
  totalVideos;
  comments;
  subscribers;


  constructor(private api: ApiService) {
    this.proyectos = this.api.apiV1ProyectosList();
   }

  ngOnChanges() {
    /*this.api.apiV1YoutubeEstadisticasCanalCreate(this.proyecto);
    this.views = Math.floor(Math.random() * 1000);
    this.totalVideos = Math.floor(Math.random() * 1000);
    this.comments = Math.floor(Math.random() * 1000);
    this.subscribers = Math.floor(Math.random() * 1000);*/
  }




  ngOnInit(): void {
    this.proyectos.subscribe( p => {
      this.projecto_seleccionado = of(p[0]);
    })
  }

  onItemClick($event:Proyecto){
    this.projecto_seleccionado = of($event);
  }
}
