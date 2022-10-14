import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/metatube/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subtitulo : Observable<string>;
  url : Observable<string>;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.subtitulo = this.store.select(state => state.proyectos.proyecto_seleccionado.nombre);
    this.url = this.store.select(state => state.proyectos.proyecto_seleccionado.url);
  }

}
