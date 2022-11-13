import { Component, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/metatube/store';
import { Observable } from 'rxjs';
import { VideoService, Channel, Video } from 'src/api';

@Component({
  selector: 'app-top-videos',
  templateUrl: './top-videos.component.html',
  styleUrls: ['./top-videos.component.scss']
})
export class TopVideosComponent implements OnInit {

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

  videos : Video[];

  constructor(private store: Store<AppState>,private videoApi : VideoService) {
    this.store.select(state => state.proyectos.canal_seleccionado).subscribe((channel)=>{
      videoApi.videoList(channel.id).subscribe(videos =>{
        this.videos = videos;
      })
    })
   }

  ngOnInit(): void {
  }

}
