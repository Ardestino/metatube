import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "src/app/metatube/store";
import { Channel, Proyecto, AIService } from "src/api";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  proyecto$: Observable<Proyecto>;
  canal$: Observable<Channel>;

  constructor(private store: Store<AppState>, private aiApi: AIService) {}

  ngOnInit(): void {
    this.proyecto$ = this.store.select(
      (state) => state.proyectos.proyecto_seleccionado
    );
    this.canal$ = this.store.select(
      (state) => state.proyectos.canal_seleccionado
    );

    this.canal$.subscribe(({keywords, topics, topicCategories})=>{
      // Formar lista de palabras para mandar a la api
      const map = keywords.flatMap((value)=> value.keyword);
      if(map.length > 0) {
        this.aiApi.aIGetTrendDataCreate(map.join(',')).subscribe((value)=>{
          this.data = Object.keys(value).map((v)=>({ 'word' : v, 'value': value[v][Object.keys(value[v]).reverse()[1]] , 'group' : 'keyword'}))
        });
      }
      //const keyword = keywords.map((value) => ({ 'word' : value.keyword, 'value': 60 , group : 'keyword' }))
      //const topic = topics.map((value) => ({ 'word' : value.topic, 'value': 60 , group : 'topic' }))
      //const category = topicCategories.map((value) => ({ 'word' : value.category.split('/').slice(-1)[0], 'value': 60 , group : 'category' }))

      //const data = keyword.concat(topic).concat(category);
      //this.data = data;
    });
  }

  data = [];
  options = {
    title: 'Palabras Clave',
    resizable: true,
    color: {
      pairing: {
        option: 3,
      },
    },
    height: '400px',
  };
}
