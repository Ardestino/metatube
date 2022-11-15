import { Component, OnInit } from '@angular/core';
import { PaginationModel } from 'carbon-components-angular';
import { CommentsService, Comment } from 'src/api';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/metatube/store';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {
  comentarios: Comment[];
  model = new PaginationModel();
  pageLenght = 5;

  constructor(private store: Store<AppState>,private commentsApi: CommentsService) {}

  ngOnInit(): void {
    this.model.pageLength = this.pageLenght;
    this.store.select(state => state.proyectos.video_seleccionado).subscribe((video)=>{
      if(video.id != ''){
        this.videoId = video.id
        this.selectPage(1);
      }
    })
  }

  videoId = '';
  selectPage(page, ) {
    const offset = page * this.pageLenght
    this.commentsApi
      .commentsList(this.pageLenght, offset,undefined,this.videoId)
      .subscribe((comments) => {
        this.comentarios = comments.results;
        this.model.pageLength = this.pageLenght;
        this.model.currentPage = page;
        this.model.totalDataLength = comments.count;
      });
    this.model.currentPage = page;
  }
}
